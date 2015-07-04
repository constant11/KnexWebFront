/*
 * Bootstrap Image Gallery JS Demo 3.0.1
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global blueimp, $ */

$(function () {
    'use strict';

    // Load demo images from flickr:
    // $.fn.images_test = function(){
    //     $.ajax({
    //         url: 'https://api.flickr.com/services/rest/',
    //         data: {
    //             format: 'json',
    //             method: 'flickr.interestingness.getList',
    //             api_key: '7617adae70159d09ba78cfec73c13be3'
    //         },
    //         dataType: 'jsonp',
    //         jsonp: 'jsoncallback'
    //     }).done(function (result) {
    //         console.log(result);
    //         alert(baseUrl)
    //         var linksContainer = $('#links'),
    //             baseUrl;
    //         // Add the demo images as links with thumbnails to the page:
    //         $.each(result.photos.photo, function (index, photo) {
    //             baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
    //                 photo.server + '/' + photo.id + '_' + photo.secret;
    //             $('<a/>')
    //                 .append($('<img>').prop('src', baseUrl + '_s.jpg'))
    //                 .prop('href', baseUrl + '_b.jpg')
    //                 .prop('title', photo.title)
    //                 .attr('data-gallery', '')
    //                 .appendTo(linksContainer);
    //         });
    //     });
    // }
    $.fn.images_test2 = function(images){
        var linksContainer = $('#links');
        $.each(images, function (index, photo) {
            $('<a class="col-xs-12 col-sm-6 col-md-4 col-lg-4" style="padding-left: 0px; padding-right: 0%;"/>')
                .append($('<img style="margin:0; padding:3px; width:100%;">').prop('src', photo.path_s))
                .prop('href', photo.path_b)
                .prop('title', photo.title)
                .attr('data-gallery', '')
                .appendTo(linksContainer);
        });
    }

    $.fn.loadFunctions = function(){
        $('#blueimp-gallery').data('useBootstrapModal', false);
        $('#blueimp-gallery').addClass('blueimp-gallery-controls');
        
        $('#borderless-checkbox').on('change', function () {
            var borderless = $(this).is(':checked');
            $('#blueimp-gallery').data('useBootstrapModal', !borderless);
            $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
        });

        $('#fullscreen-checkbox').on('change', function () {
            $('#blueimp-gallery').data('fullScreen', $(this).is(':checked'));
        });

        $('#image-gallery-button').on('click', function (event) {
            event.preventDefault();
            blueimp.Gallery($('#links a'), $('#blueimp-gallery').data());
        });

        $('#video-gallery-button').on('click', function (event) {
            event.preventDefault();
            blueimp.Gallery([
                {
                    title: 'Sintel',
                    href: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
                    type: 'video/mp4',
                    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
                },
                {
                    title: 'Big Buck Bunny',
                    href: 'http://upload.wikimedia.org/wikipedia/commons/7/75/' +
                        'Big_Buck_Bunny_Trailer_400p.ogg',
                    type: 'video/ogg',
                    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
                        'Big.Buck.Bunny.-.Opening.Screen.png/' +
                        '800px-Big.Buck.Bunny.-.Opening.Screen.png'
                },
                {
                    title: 'Elephants Dream',
                    href: 'http://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
                        'Elephants_Dream_%28high_quality%29.ogv/' +
                        'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
                    type: 'video/webm',
                    poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
                        'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
                },
                {
                    title: 'LES TWINS - An Industry Ahead',
                    href: 'http://www.youtube.com/watch?v=zi4CIXpx7Bg',
                    type: 'text/html',
                    youtube: 'zi4CIXpx7Bg',
                    poster: 'http://img.youtube.com/vi/zi4CIXpx7Bg/0.jpg'
                },
                {
                    title: 'KN1GHT - Last Moon',
                    href: 'http://vimeo.com/73686146',
                    type: 'text/html',
                    vimeo: '73686146',
                    poster: 'http://b.vimeocdn.com/ts/448/835/448835699_960.jpg'
                }
            ], $('#blueimp-gallery').data());
        });
    }

});
