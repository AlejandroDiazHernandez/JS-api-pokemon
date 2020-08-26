const viewAboutMe = () =>{
    document.getElementById("container").classList.add('hidden');
    document.getElementById("containerAbout").classList.remove('hidden');
};

const viewBackToPokedex = () =>{
    document.getElementById("containerAbout").classList.add('hidden');
    document.getElementById("container").classList.remove('hidden');
};

export {viewAboutMe, viewBackToPokedex};