import "querystring@1.3.0"

handler() {

	local path
	local QUERY
    local ADDRESS
    local BODY
	path="$(jq -r '.path' < "$1")"
	QUERY="$(querystring "$path")"

    IFS="&"
    set -- $QUERY
    IFS="="
    set -- $2
    ADDR=$2
    AT="@"
    ADDRESS=${ADDR//%40/$AT}

    IFS="&"
    set -- $QUERY
    IFS="="
    set -- $1
    BOD=$2
    SPACE=" "
    BODY=${BOD//%20/$SPACE}

    curl -s -X POST --user "${API_KEY}:${API_SECRET}" https://api.mailjet.com/v3.1/send -H "Content-Type:application/json" -d '{"Messages":[{"From": {"Email": "10575516@polimi.it","Name": "Polimi Raffaele"},"To": [{"Email": "raffaelespinoni@gmail.com","Name": "Raffaele"}],"Subject": "Mail from the portfolio website","TextPart": "","HTMLPart": "<i>'${BODY}'</i><br><br>From: '${ADDRESS}'","CustomID": "AppGettingStartedTest"}]}'
}
