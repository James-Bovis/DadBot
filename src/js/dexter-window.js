
window.dexterSettings = {
  onLoad: function (api) {
    api.replyTo("web welcome");
  }
}

var i=document.createElement('iframe');i.style.width=0;i.style.height=0;i.style.display='none';i.src='javascript:false',i.botId='7c3c9d27-20a3-4a55-a3e7-963fd7f88d99',i.botTitle='Dad Bot',i.baseUrl='https://bots.rundexter.com';var d=document.getElementsByTagName('script');d=d[d.length-1],d.parentNode.insertBefore(i,d);var o=i.contentWindow.document;o.open()._l=function(){var e=this.createElement('script');e.src='https://rundexter.com/webwidget',this.body.appendChild(e)},o.write('<body onload="document._l();">'),o.close();
