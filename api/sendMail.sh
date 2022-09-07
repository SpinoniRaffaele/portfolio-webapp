import "querystring@1.3.0"

# to whitelist in the UI: #, =, &, ?, /
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
    set -- $1
    ADDR=$2
    AT="@"
    ADDRESS=${ADDR//%40/$AT}
    echo $ADDRESS

    IFS="&"
    set -- $QUERY
    IFS="="
    set -- $2
    BOD=$2
    SPACE=" "
    BODY=${BOD//%20/$SPACE}
    echo $BODY

    curl -s -X POST --user "${API_KEY}:${API_SECRET}" https://api.mailjet.com/v3.1/send -H "Content-Type:application/json" -d '{"Messages":[{"From": {"Email": "10575516@polimi.it","Name","Name": "Raffaele"},"To": [{"Email": "raffaelespinoni@gmail.com","Name": "Raffaele"}],"Subject": "Mail from the portfolio website","TextPart": "'${BODY}'","HTMLPart": "<br>From: '${ADDRESS}'","CustomID": "AppGettingStartedTest"}]}'
}
