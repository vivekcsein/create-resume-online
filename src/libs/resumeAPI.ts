const endpoint = "https://vivekcsein.github.io/githost/api/vivekcse/resume_vivekcse.json";

const fetchAPI = async (endpoint: string) => {
    try {
        let res = await fetch(`${endpoint}`, {
            method: "GET",
            cache: "no-cache",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            // mode: 'cors',
            credentials: 'same-origin'
        })
        return res.json();
    } catch (err) {
        console.error(err + "Failed to fetch data");
    }
}

export const getResumeAPI = async () => {
    const data = await fetchAPI(endpoint);
    return data.resumeData;
};