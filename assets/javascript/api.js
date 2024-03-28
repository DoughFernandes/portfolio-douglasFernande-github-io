async function fetchProfileDate(){
    const url = 'https://raw.githubusercontent.com/DoughFernandes/Data-Profile/main/data/profile.json';

    const fetching = await fetch(url);

    return fetching.json();
    
}