document.addEventListener('click', function(event) {  
    // 创建一个新的p元素  
    var newParagraph = document.createElement('p');  
      
    // 设置新元素的文本内容  
    // 这里我们简单地使用了点击时的时间戳作为示例文本  
    newParagraph.textContent = 'Line of text added at ' + new Date().toLocaleTimeString();  
      
    // 获取要添加新元素的容器  
    var textContainer = document.getElementById('text-container');  
      
    // 将新元素添加到容器中  
    textContainer.appendChild(newParagraph);  
});