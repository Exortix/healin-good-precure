let array;
fetch('../../json/episodes.json')
.then(response => response.json())
.then(data => {
    array = data;
    array.forEach( e => {
        document.getElementById('ep').innerHTML += `<option value = '${e.id}'>${e.id}</option>`;
    });
    document.title = array[Number(document.getElementById('ep').value)-1].title;
    document.getElementById('main').innerHTML += 
    `<iframe id="embedvideo" src="https://${array[Number(document.getElementById('ep').value)-1].url}" allowfullscreen="false" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>`
    // `<iframe id='video' src="https://${data[0].url}" controls allowfullscreen="true" frameborder="0"  scrolling="no"></iframe>`
});

$( "#ep" ).change(function() {
    document.title = array[Number(document.getElementById('ep').value)-1].title;
    document.getElementById('main').innerHTML = ``;
    document.getElementById('main').innerHTML +=
    `<iframe id="embedvideo" src="https://${array[Number(document.getElementById('ep').value)-1].url}" allowfullscreen="false" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>`
});