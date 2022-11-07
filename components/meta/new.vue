vif(noIndex){%>
    <meta name="googlebot" content="noindex">
}
if(page.noIndex){%>
    <meta name="googlebot" content="noindex">
}
if(page.noIndex){
<meta name="googlebot" content="noindex">
<meta name="googlebot-news" content="nosnippet">
}
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    if((page&&page.metaTags&&page.metaTags.ogDescription)||(metaTags&&metaTags.ogDescription)){
page&&page.metaTags&&page.metaTags.ogDescription&&page.metaTags.ogDescription!=='' ? page.metaTags.ogDescription : metaTags.ogDescription %>">
    }
    if((page.metaTags&&page.metaTags.keywords)||(metaTags&&metaTags.keywords)){
page&&page.metaTags&&page.metaTags.keywords&&page.metaTags.keywords!=='' ? page.metaTags.keywords : metaTags.keywords">
    }
    if((page.metaTags&&page.metaTags.ogTitle)||(metaTags&&metaTags.ogTitle)){ page&&page.metaTags&&page.metaTags.ogTitle&&page.metaTags.ogTitle!=='' ? page.metaTags.ogTitle : metaTags.ogTitle %>">
    }
<%-req.session.activeClient.title%>">
<%-pageUrl%>">
    if((page.metaTags&&page.metaTags.ogImage)||(metaTags&&metaTags.ogImage)){%>
<%= page&&page.metaTags&&page.metaTags.ogImage&&page.metaTags.ogImage!=='' ? page.metaTags.ogImage : metaTags.ogImage %>">
    }
    if((page.metaTags&&page.metaTags.ogDescription)||(metaTags.ogDescription)){%>
<%= page&&page.metaTags&&page.metaTags.ogDescription&&page.metaTags.ogDescription!=='' ? page.metaTags.ogDescription : metaTags.ogDescription %>">
    }
    <link rel="icon" type="image/x-icon" href="<%=favicon%>">
    <%- gaCode %>

    myData['metaTags']['keywords']= item.metaTags.keywords;
    myData['metaTags']['ogTitle']= item.metaTags.ogTitle;
    myData['metaTags']['ogDescription']= item.metaTags.ogDescription;
    myData['metaTags']['ogImage']= item.metaTags.ogImage;

    if(item.metaTags&&item.metaTags.keywords){
        myData['metaTags']['keywords']= item.metaTags.keywords;
    }else{
        myData['metaTags']['keywords']= item.website.metaTags.keywords;
    }
    if(item.metaTags&&item.metaTags.ogTitle){
        myData['metaTags']['ogTitle']= item.metaTags.ogTitle;
    }else{
        myData['metaTags']['ogTitle']= item.website.metaTags.ogTitle;
    }
    if(item.metaTags&&item.metaTags.ogDescription){
        myData['metaTags']['ogDescription']= item.metaTags.ogDescription;
    }else{
        myData['metaTags']['ogDescription']= item.website.metaTags.ogDescription;
    }
    if(item.metaTags&&item.metaTags.ogImage){
        myData['metaTags']['ogImage']= item.metaTags.ogImage;
    }else{
        myData['metaTags']['ogImage']= item.website.metaTags.ogImage;
    }
    new line added