export const modifyIntentions = async (intentions) => {
    try {
        let response = await fetch("http://localhost:3000/api/add_intentions", {
            method: "POST",
            body: JSON.stringify({
                intentions: intentions,
                date: getDate(),
            }),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        });
        response = await response.json()
        console.log(response);
    } catch (errorMessage) {
        alert(errorMessage);
    }
}

export const getDate = () => {
    return new Date().toJSON().slice(0, 10)
}