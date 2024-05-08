const ping_server = async () => {
    console.log("pinging server", process.env.EXPO_PUBLIC_SERVER)
    try {
        const response = await fetch(
            process.env.EXPO_PUBLIC_SERVER,
            {
                // mode: "no-cors",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                // body: JSON.stringify({})
            }
        );

        if (response.ok) {
            const data = await response.json()
            console.log("server status:", data)
        }
    }
    catch (err) {
        console.log("server status: offline:", err)

    }
}

const send_to_ocr = (img) => {

}

export { ping_server }