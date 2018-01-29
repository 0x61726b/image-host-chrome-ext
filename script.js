function onClickClipboard(info) {
    var link = info.linkUrl || info.pageUrl;
    if(link) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://arkn.xyz/upload_from_url", true);
        var data = new FormData();
        data.append('api_key', 'huehue');
        data.append('image_url', link);
        
        xhr.onload = function () {
            copyToClipboard(this.responseText);

            chrome.notifications.create(
                'Upload Success!',{   
                type: 'basic', 
                iconUrl: 'icon.png', 
                title: "Upload success!", 
                message: this.responseText },
            
            function() {} 
            
            );
        }
        xhr.send(data);
    }
}

function onClickNewTab(info) {
    var link = info.linkUrl || info.pageUrl;
    if(link) {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://arkn.xyz/upload_from_url", true);
        var data = new FormData();
        data.append('api_key', 'huehue');
        data.append('image_url', link);
        
        xhr.onload = function () {
            copyToClipboard(this.responseText);

            chrome.tabs.create({ url: this.responseText }, function() { })

            chrome.notifications.create(
                'Upload Success!',{   
                type: 'basic', 
                iconUrl: 'icon.png', 
                title: "Upload success!", 
                message: this.responseText },
            
            function() {}
            
            );
        }
        xhr.send(data);
    }
}

function copyToClipboard(text) {
    const input = document.createElement('input');
    input.style.position = 'fixed';
    input.style.opacity = 0;
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
  };

chrome.contextMenus.create({
    title: "Rehost on Arkn.xyz", 
    contexts:["image"], 
    onclick: onClickClipboard,
  });