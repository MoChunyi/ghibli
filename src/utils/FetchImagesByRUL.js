const FetchImagesByURL = (url) => {
    console.log(url)
    return fetch(url).then(function(response){
        if (response.status === 200) {
            return response.blob();
        }
        return null
    }).then(function(imgblob){
        if (imgblob != null) {
            return (URL.createObjectURL(imgblob));
        }
        return null;
    })
};

export default FetchImagesByURL;