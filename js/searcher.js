var title = $('title').text();
title = title.replace(/\(豆瓣\)/,"").replace(/（第\w版）/,"");
var url = "http://202.195.144.48:8080/search?kw="+title;
var newContent = $('<p class=""><span class="pl">资源链接：</span><span class="labeled-text"><a class="library_search" target="_blank" href="">江南大学图书馆</a></span></p>');
$('#info').append(newContent);
$('.library_search').attr("href", url);