async function fetchProfileDate(){
    const url = 'https://raw.githubusercontent.com/DoughFernandes/Portfolio/main/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json()
}

