import Mailjet, { LibraryResponse } from "node-mailjet";
import { RequestData } from "node-mailjet/declarations/request/Request";
import handler from "./sendMail";
import {describe, expect, it, jest} from "@jest/globals";

describe('test sendMail handler', () => {
    const request: any = {
        body: {
            address: "test@mail.com",
            textBody: "this is the body"
        }
    };

    const response = {
        send: jest.fn()
    };

    it('should correctly send mail request', () => {
        const mockPromise = new Promise<LibraryResponse<RequestData>>(() => {return {status: "ok"}});
        const mockRequest: any = {request: (_: any) => {return mockPromise;}};

        jest.spyOn(Mailjet, 'apiConnect').mockReturnValue({
            post: (_: any) => {
                return mockRequest;
        }} as any);

        process.env["API_KEY"] = "apiKey";
        process.env["API_SECRET"] = "apiSecret";

        handler(request, response);

        mockPromise.then(() => {
            expect(Mailjet.apiConnect).toHaveBeenCalledWith("apiKey", "apiSecret");
            expect(mockRequest.request).toHaveBeenCalledWith(
                {
                    Messages: [
                        {
                            From: {
                                Email: 'raffaele.spinoni@gmail.com',
                                Name: 'Raffaele',
                            },
                            To: [
                                {
                                    Email: 'raffaelespinoni@gmail.com',
                                    Name: 'Raffaele',
                                },
                            ],
                            Subject: 'Portfolio Webapp message',
                            TextPart: '',
                            HTMLPart: 'New message from ' + request.body.address + 
                            '<br><i>' + request.body.textBody + '</i>'
                        },
                    ],
                }
            );
            expect(response.send).toHaveBeenCalledWith(JSON.stringify({status: "success"}));
    });
    });

    it('should correctly send error if any', () => {
        const errorPromise = new Promise(() => {throw new Error();});
        const mockRequest: any = {
            request: () => {
            return errorPromise;
        }};

        jest.spyOn(Mailjet, 'apiConnect').mockReturnValue({
            post: (_: any) => {
                return mockRequest;
        }} as any);

        handler(request, response);

        errorPromise.then().catch((error: any) => {
            expect(response.send).toHaveBeenCalledWith(JSON.stringify({status: "ko", error: error}));
        });
    });
});