const messagesFromReactAppListener = (message, sender, response) => {
    console.log('[content.js]. Message received', {
        message,
        sender,
    })

    if (
        sender.id === chrome.runtime.id &&
        message.from === "Sender.React" &&
        message.message === 'Hello from React') {
        response('Hello from content.js');
    }

    if (
        sender.id === chrome.runtime.id &&
        message.from === "Sender.React" &&
        message.message === "delete logo") {

        const tag = "img"
        const elems = document.getElementsByTagName(tag)
        console.log({ tag, elems })

        for (const elem of elems) {
            console.log(elem)
            const button = document.createElement('button')
            button.data = "ahoj"
            button.addEventListener("click", function () {
                console.log("click ", elem.src)
                alert("did something");
            })
            button.innerHTML = 'click me'
            elem.parentElement.appendChild(button)
        }
    }
}

/**
 * Fired when a message is sent from either an extension process or a content script.
 */
chrome.runtime.onMessage.addListener(messagesFromReactAppListener);