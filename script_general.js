(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"gap":10,"id":"rootPlayer","minHeight":0,"children":["this.MainViewer"],"backgroundColor":["#FFFFFF"],"start":"this.init()","class":"Player","data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false,"pitch":1},"defaultLocale":"es","history":{},"name":"Player6766","locales":{"es":"locale/es.txt"}},"backgroundColorRatios":[0],"propagateClick":false,"scrollBarColor":"#000000","defaultMenu":["fullscreen","mute","rotation"],"width":"100%","height":"100%","vrPolyfillScale":1,"scripts":{"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"isPanorama":TDV.Tour.Script.isPanorama,"getOverlays":TDV.Tour.Script.getOverlays,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getKey":TDV.Tour.Script.getKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"registerKey":TDV.Tour.Script.registerKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"translate":TDV.Tour.Script.translate,"getMainViewer":TDV.Tour.Script.getMainViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"createTween":TDV.Tour.Script.createTween,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"init":TDV.Tour.Script.init,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"cloneBindings":TDV.Tour.Script.cloneBindings,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setLocale":TDV.Tour.Script.setLocale,"getComponentByName":TDV.Tour.Script.getComponentByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"mixObject":TDV.Tour.Script.mixObject,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"resumePlayers":TDV.Tour.Script.resumePlayers,"clone":TDV.Tour.Script.clone,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"playAudioList":TDV.Tour.Script.playAudioList,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"historyGoForward":TDV.Tour.Script.historyGoForward,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"shareSocial":TDV.Tour.Script.shareSocial,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"historyGoBack":TDV.Tour.Script.historyGoBack,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeJS":TDV.Tour.Script.executeJS,"quizFinish":TDV.Tour.Script.quizFinish,"startMeasurement":TDV.Tour.Script.startMeasurement,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"existsKey":TDV.Tour.Script.existsKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizStart":TDV.Tour.Script.quizStart,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setValue":TDV.Tour.Script.setValue,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"openLink":TDV.Tour.Script.openLink,"downloadFile":TDV.Tour.Script.downloadFile,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showWindow":TDV.Tour.Script.showWindow,"getPixels":TDV.Tour.Script.getPixels,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent},"hash": "18654034563e79b3f9f604363ca392968fa24c67775b36ea4e4bfd8130bd360d", "definitions": [{"id":"panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_camera","initialSequence":"this.sequence_C76C23A1_D462_8C39_41B0_5220721643EE","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","hfov":138,"pitch":0}},{"id":"MainViewerPanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true},{"id":"MainViewer","playbackBarProgressBorderRadius":0,"toolTipBorderColor":"#767676","playbackBarHeadShadowOpacity":0.7,"progressBorderRadius":2,"progressBarBackgroundColor":["#3399FF"],"firstTransitionDuration":0,"subtitlesBackgroundColor":"#000000","progressBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"data":{"name":"Main Viewer"},"progressBackgroundColor":["#000000"],"subtitlesBottom":50,"subtitlesTop":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBackgroundColorRatios":[0],"toolTipBackgroundColor":"#F6F6F6","toolTipFontColor":"#606060","playbackBarBorderColor":"#FFFFFF","vrThumbstickRotationStep":20,"progressBottom":10,"playbackBarBorderRadius":0,"width":"100%","playbackBarProgressBorderColor":"#000000","progressHeight":2,"progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"surfaceReticleColor":"#FFFFFF","height":"100%","vrPointerSelectionTime":2000,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowVerticalLength":1,"progressBorderSize":0,"progressBarBorderSize":0,"playbackBarHeadBorderRadius":0,"progressBarBorderRadius":2,"playbackBarHeadBorderColor":"#000000","toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","progressBackgroundColorRatios":[0],"playbackBarHeadShadowColor":"#000000","toolTipPaddingLeft":6,"playbackBarLeft":0,"minHeight":50,"toolTipPaddingBottom":4,"subtitlesBackgroundOpacity":0.2,"playbackBarBorderSize":0,"minWidth":100,"subtitlesFontFamily":"Arial","playbackBarHeadHeight":15,"progressRight":"33%","progressOpacity":0.7,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadShadow":true,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","propagateClick":false,"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipShadowColor":"#333138","toolTipPaddingRight":6,"subtitlesGap":0,"playbackBarBackgroundColor":["#FFFFFF"],"vrPointerColor":"#FFFFFF","playbackBarHeight":10,"toolTipPaddingTop":4,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"class":"ViewerArea"},{"id":"panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0","label":trans('panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0.label'),"hfovMax":141,"hfovMin":"135%","frameDisplayTime":2000,"data":{"label":"IMG_20240222_172909_00_merged(1)"},"hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2560,"rowCount":5,"colCount":30,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":15360},{"height":1536,"rowCount":3,"colCount":18,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"rowCount":2,"colCount":12,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_0_t.jpg"},{"cube":{"class":"ImageResource","levels":[{"height":2560,"rowCount":5,"colCount":30,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_1/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":15360},{"height":1536,"rowCount":3,"colCount":18,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_1/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"rowCount":2,"colCount":12,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_1/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_1/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_1_t.jpg"},{"cube":{"class":"ImageResource","levels":[{"height":2560,"rowCount":5,"colCount":30,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_2/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":15360},{"height":1536,"rowCount":3,"colCount":18,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_2/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"rowCount":2,"colCount":12,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_2/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_2/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_2_t.jpg"},{"cube":{"class":"ImageResource","levels":[{"height":2560,"rowCount":5,"colCount":30,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_3/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":15360},{"height":1536,"rowCount":3,"colCount":18,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_3/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"rowCount":2,"colCount":12,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_3/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_3/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_3_t.jpg"},{"cube":{"class":"ImageResource","levels":[{"height":2560,"rowCount":5,"colCount":30,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_4/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":15360},{"height":1536,"rowCount":3,"colCount":18,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_4/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"rowCount":2,"colCount":12,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_4/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_4/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_4_t.jpg"},{"cube":{"class":"ImageResource","levels":[{"height":2560,"rowCount":5,"colCount":30,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_5/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":15360},{"height":1536,"rowCount":3,"colCount":18,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_5/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"rowCount":2,"colCount":12,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_5/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_5/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_5_t.jpg"},{"cube":{"class":"ImageResource","levels":[{"height":2560,"rowCount":5,"colCount":30,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_6/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":15360},{"height":1536,"rowCount":3,"colCount":18,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_6/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"rowCount":2,"colCount":12,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_6/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_6/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_6_t.jpg"},{"cube":{"class":"ImageResource","levels":[{"height":2560,"rowCount":5,"colCount":30,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_7/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":15360},{"height":1536,"rowCount":3,"colCount":18,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_7/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"rowCount":2,"colCount":12,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_7/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_7/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_7_t.jpg"},{"cube":{"class":"ImageResource","levels":[{"height":2560,"rowCount":5,"colCount":30,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_8/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":15360},{"height":1536,"rowCount":3,"colCount":18,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_8/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"rowCount":2,"colCount":12,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_8/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_8/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_8_t.jpg"},{"cube":{"class":"ImageResource","levels":[{"height":2560,"rowCount":5,"colCount":30,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_9/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":15360},{"height":1536,"rowCount":3,"colCount":18,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_9/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":9216},{"height":1024,"rowCount":2,"colCount":12,"tags":"ondemand","url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_9/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":6144},{"height":512,"rowCount":1,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_9/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_9_t.jpg"}],"thumbnailUrl":"media/panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_5_t.jpg","frameTransitionTime":2000,"class":"LivePanorama","vfov":180},{"id":"mainPlayList","class":"PlayList","items":[{"start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)","media":"this.panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_C0A99C46_D463_947B_41DA_A8736BAFE9A0_camera","class":"PanoramaPlayListItem"}]},{"id":"sequence_C76C23A1_D462_8C39_41B0_5220721643EE","movements":[{"easing":"cubic_in","yawSpeed":3.19,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":3.19,"yawDelta":323000,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":3.19,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence"}],"layout":"absolute","scrollBarMargin":2,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.2.8.js.map
})();
//Generated with v2023.2.8, Fri Feb 23 2024