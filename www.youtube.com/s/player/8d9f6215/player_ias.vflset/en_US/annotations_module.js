(function(g) {
    var window = this;
    'use strict';
    var C2 = function(a) {
            a.publish("cardstatechange", a.bl() && a.Ep() ? 1 : 0)
        },
        D2 = function(a, b) {
            var c = g.Sa(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (a == null) return;
                a = a[d[c]]
            }
            return a
        },
        Acb = function(a) {
            var b = g.tm(a);
            a = g.wm(a);
            return new g.hm(b.x, b.y, a.width, a.height)
        },
        Bcb = function(a, b, c) {
            var d = d === void 0 ? {} : d;
            var e;
            return e = g.mt(a, b, function() {
                g.nt(e);
                c.apply(a, arguments)
            }, d)
        },
        G2 = function(a) {
            a = g.Wa(a);
            delete E2[a];
            g.Gc(E2) && F2 && F2.stop()
        },
        Dcb = function() {
            F2 || (F2 = new g.fp(function() {
                Ccb()
            }, 20));
            var a = F2;
            a.isActive() || a.start()
        },
        Ccb = function() {
            var a = g.$a();
            g.vc(E2, function(b) {
                Ecb(b, a)
            });
            g.Gc(E2) || Dcb()
        },
        H2 = function(a, b, c, d) {
            g.sp.call(this);
            if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
            if (a.length != b.length) throw Error("Start and end points must be the same length");
            this.B = a;
            this.N = b;
            this.duration = c;
            this.G = d;
            this.coords = [];
            this.progress = this.K = 0;
            this.D = null
        },
        Ecb = function(a, b) {
            b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
            a.progress = (b - a.startTime) / (a.endTime - a.startTime);
            a.progress > 1 && (a.progress = 1);
            a.K = 1E3 / (b - a.D);
            a.D = b;
            Fcb(a, a.progress);
            a.progress == 1 ? (a.j = 0, G2(a), a.onFinish(), a.As()) : a.isPlaying() && a.FN()
        },
        Fcb = function(a, b) {
            typeof a.G === "function" && (b = a.G(b));
            a.coords = Array(a.B.length);
            for (var c = 0; c < a.B.length; c++) a.coords[c] = (a.N[c] - a.B[c]) * b + a.B[c]
        },
        Gcb = function(a, b) {
            g.lb.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.fps = b.K;
            this.state = b.j
        },
        I2 = function(a, b, c, d, e) {
            H2.call(this, b, c, d, e);
            this.element = a
        },
        Hcb = function(a, b, c, d, e) {
            if (b.length != 2 || c.length != 2) throw Error("Start and end points must be 2D");
            I2.call(this, a, b, c, d, e)
        },
        Icb = function(a) {
            return Math.pow(a, 3)
        },
        Jcb = function(a) {
            return 3 * a * a - 2 * a * a * a
        },
        Kcb = function(a) {
            g.K.call(this);
            this.B = a || window;
            this.j = []
        },
        J2 = function(a) {
            return a.baseUrl || null
        },
        K2 = function(a, b) {
            return g.ln(g.Bl(a, b), function(c) {
                return !!c
            })
        },
        Lcb = function(a, b, c) {
            function d(oa) {
                var ba = oa.hovercardButton;
                if (!ba) return null;
                ba = ba.subscribeButtonRenderer;
                if (!ba) return null;
                var qa = f(ba.unsubscribedButtonText),
                    P = f(ba.subscribedButtonText);
                if (ba.subscribed) {
                    var wa = f(ba.subscriberCountWithUnsubscribeText);
                    var y = f(ba.subscriberCountText)
                } else wa = f(ba.subscriberCountText), y = f(ba.subscriberCountWithSubscribeText);
                var W = null;
                if (oa.signinEndpoint) {
                    W = D2(oa, "signinEndpoint", "webNavigationEndpointData", "url");
                    if (!W) {
                        var xb, Ua;
                        W = (Ua = g.R((xb = ba.signInEndpoint) == null ? void 0 : xb.commandMetadata, g.y1)) == null ? void 0 :
                            Ua.url
                    }
                    if (!W) return null
                }
                return qa && (P || W) ? {
                    subscribed: ba.subscribed,
                    subscribeText: qa,
                    subscribeCount: wa,
                    unsubscribeText: P,
                    unsubscribeCount: y,
                    enabled: ba.enabled,
                    signinUrl: W,
                    classic: oa.useClassicSubscribeButton
                } : null
            }

            function e(oa) {
                if (oa) {
                    var ba = [],
                        qa = oa.videoId;
                    qa && ba.push("v=" + qa);
                    (qa = oa.playlistId) && ba.push("list=" + qa);
                    (oa = oa.startTimeSeconds) && ba.push("t=" + oa);
                    return "/watch?" + ba.join("&")
                }
            }

            function f(oa) {
                if (!oa) return null;
                var ba = oa.simpleText;
                return ba ? ba : oa.runs ? g.Bl(oa.runs, function(qa) {
                    return qa.text
                }).join("") : null
            }
            b = b.endscreenElementRenderer;
            if (!b) return null;
            var h = b.style,
                l = b.endpoint || {},
                m = null,
                n = null,
                p = !1,
                q = null,
                r = null,
                t = null,
                u = null,
                x = !1,
                B = null,
                E = null,
                F = null,
                I = null,
                O = null,
                N = null;
            if (h === "VIDEO") g.R(l, g.Py) ? m = g.R(l, g.Py).url : (N = g.R(l, g.iR), m = e(N)), n = !1, q = a, b.thumbnailOverlays ? (p = b.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer, r = f(p.text), p = p.style === "LIVE") : r = f(b.videoDuration);
            else if (h === "PLAYLIST") g.R(l, g.Py) ? m = g.R(l, g.Py).url : (N = g.R(l, g.iR), m = e(N)), n = !1, q = a, t = f(b.playlistLength);
            else if (h ===
                "CHANNEL") {
                if (x = D2(l, "browseEndpoint", "browseId")) u = x, m = "/channel/" + u;
                n = !1;
                q = "new";
                (x = !!b.isSubscribe) ? B = d(b): E = f(b.subscribersText)
            } else h === "WEBSITE" ? ((F = D2(l, "urlEndpoint", "url")) && (m = F), n = !0, q = "new", F = b.icon.thumbnails[0].url) : h === "CREATOR_MERCHANDISE" && (b.productPrice && (I = f(b.productPrice)), b.additionalFeesText && (O = f(b.additionalFeesText)), (n = D2(l, "urlEndpoint", "url")) && (m = n), n = !0, q = "new");
            a = D2(b, "title", "accessibility", "accessibilityData", "label");
            var S = b.endpoint ? b.endpoint.clickTrackingParams :
                null,
                Y = "";
            if (b.metadata) {
                var la = f(b.metadata);
                la && (Y = la)
            }
            return {
                id: "element-" + c,
                type: h,
                title: f(b.title),
                metadata: Y,
                callToAction: f(b.callToAction),
                HX: b.image,
                iconUrl: F,
                left: Number(b.left),
                width: Number(b.width),
                top: Number(b.top),
                aspectRatio: Number(b.aspectRatio),
                startMs: Math.floor(Number(b.startMs)),
                endMs: Math.floor(Number(b.endMs)),
                videoDuration: r,
                DF: p,
                playlistLength: t,
                channelId: u,
                subscribeButton: B,
                subscribersText: E,
                isSubscribe: x,
                targetUrl: m || null,
                Q9: n,
                sessionData: S ? {
                    itct: S
                } : null,
                lea: q,
                ZD: a ? a : null,
                isPlaceholder: b.isPlaceholder,
                impressionUrls: K2(b.impressionUrls || [], J2),
                F9: K2(b.hovercardShowUrls || [], J2),
                clickUrls: K2(l.loggingUrls || [], J2),
                visualElement: g.yx(b.trackingParams),
                productPrice: I,
                additionalFeesText: O,
                watchEndpoint: N || null
            }
        },
        Mcb = function(a, b) {
            var c = {
                startMs: Math.floor(Number(a.startMs)),
                impressionUrls: K2(a.impressionUrls || [], J2),
                elements: K2(a.elements || [], function(d, e) {
                    return Lcb(b, d, e)
                })
            };
            a.trackingParams && (c.visualElement = g.yx(a.trackingParams));
            return c
        },
        Ncb = function(a) {
            g.jU.call(this, a);
            this.C = this.endscreen = null;
            this.j = {};
            this.G = {};
            this.D = this.B = null;
            this.N = [];
            this.Y = !0;
            this.K = 0;
            a = a.U();
            this.Z = g.KP(a) || g.MP(a);
            this.events = new g.EF(this);
            g.Q(this, this.events);
            this.events.T(this.player, g.iE("creatorendscreen"), this.onCueRangeEnter);
            this.events.T(this.player, g.jE("creatorendscreen"), this.onCueRangeExit);
            this.events.T(this.player, "resize", this.jc);
            this.events.T(window, "focus", this.sca);
            this.load();
            var b = g.me("STYLE");
            (g.ee("HEAD")[0] || document.body).appendChild(b);
            this.addOnDisposeCallback(function() {
                g.re(b)
            });
            b.sheet && (b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0))
        },
        Ocb = function(a) {
            return a.player.getVideoData().Ff ? "current" : a.Z ? "new" : "current"
        },
        L2 = function(a) {
            return a.player.U().playerStyle === "creator-endscreen-editor"
        },
        Pcb = function(a) {
            var b = a.player.getVideoData(),
                c = b.videoId;
            a.C && a.C.abort();
            c = {
                method: "POST",
                onFinish: function(e) {
                    var f = a.C = null;
                    e.status === 200 && (e = e.responseText, e.substring(0, 3) === ")]}" && (e = e.substring(3), f = JSON.parse(e), f = Mcb(f, Ocb(a))));
                    M2(a, f)
                },
                urlParams: {
                    v: c
                },
                withCredentials: !0
            };
            a.Z && (c.urlParams.ptype = "embedded");
            var d = b.ow;
            d && (c.postParams = {
                ad_tracking: d
            });
            if (b = g.GLa(b))
                if (b = g.vd(b), b = g.qd(b)) a.C = g.ps(b, c)
        },
        M2 = function(a, b, c) {
            c = c === void 0 ? !0 : c;
            a.player.qf("creatorendscreen");
            a.B && (a.B.dispose(), a.B = null, a.D.dispose(), a.D = null);
            for (var d = g.v(Object.values(a.j)), e = d.next(); !e.done; e = d.next()) e.value.dispose();
            a.j = {};
            a.G = {};
            a.N.length > 0 && (a.N.forEach(function(l) {
                l.dispose()
            }), a.N.length = 0);
            a.K = 0;
            if ((a.endscreen = b) && b.elements) {
                c && Qcb(a);
                c = [];
                d = new g.gE(b.startMs, 0x7ffffffffffff, {
                    id: "ytp-ce-in-endscreen",
                    namespace: "creatorendscreen"
                });
                c.push(d);
                a.player.U().B || (a.B = new g.T({
                    I: "div",
                    S: "ytp-ce-shadow"
                }), g.KS(a.player, a.B.element, 4), a.D = new g.gz(a.B, 200));
                for (d = 0; d < b.elements.length; ++d) {
                    e = b.elements[d];
                    var f = Rcb(a, e);
                    if (f) {
                        a.j[e.id] = f;
                        a.G[e.id] = e;
                        g.KS(a.player, f.element, 4);
                        var h = new g.gE(e.startMs, e.endMs, {
                            id: "ytp-ce-element-" + e.id,
                            namespace: "creatorendscreen"
                        });
                        c.push(h);
                        Scb(a, f, e)
                    } else g.Kx(new g.Mt("buildEndscreenElement null",
                        e))
                }
                a.player.kf(c);
                a.jc()
            }
        },
        Qcb = function(a) {
            var b = g.Ax(),
                c = g.Bx();
            c && b && a.endscreen.visualElement && g.Pr(g.Wx)(void 0, c, b, a.endscreen.visualElement)
        },
        Rcb = function(a, b) {
            var c = null;
            switch (b.type) {
                case "VIDEO":
                    a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-video"],
                        W: {
                            tabindex: "0",
                            "aria-label": b.ZD || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-image",
                            W: N2(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-shadow-top"
                        }, {
                            I: "a",
                            S: "ytp-ce-covering-overlay",
                            W: {
                                href: O2(a, b.targetUrl),
                                tabindex: "-1"
                            },
                            V: [{
                                I: "div",
                                La: ["ytp-ce-video-title", "ytp-webkit-ellipsis"],
                                W: {
                                    dir: g.wp(b.title || "")
                                },
                                va: b.title
                            }, {
                                I: "div",
                                S: b.DF ? "ytp-ce-live-video-duration" : "ytp-ce-video-duration",
                                va: b.videoDuration || void 0
                            }]
                        }]
                    };
                    c = new g.T(a);
                    break;
                case "PLAYLIST":
                    a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-playlist"],
                        W: {
                            tabindex: "0",
                            "aria-label": b.ZD || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-image",
                            W: N2(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-shadow-top"
                        }, {
                            I: "a",
                            S: "ytp-ce-covering-overlay",
                            W: {
                                href: O2(a, b.targetUrl),
                                tabindex: "-1"
                            },
                            V: [{
                                I: "div",
                                La: ["ytp-ce-playlist-title", "ytp-webkit-ellipsis"],
                                W: {
                                    dir: g.wp(b.title || "")
                                },
                                va: b.title
                            }, {
                                I: "div",
                                S: "ytp-ce-playlist-count",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-playlist-icon"
                                }, {
                                    I: "div",
                                    S: "ytp-ce-playlist-count-text",
                                    va: b.playlistLength || void 0
                                }]
                            }]
                        }]
                    };
                    c = new g.T(a);
                    break;
                case "CHANNEL":
                    c = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
                        W: {
                            tabindex: "0",
                            "aria-label": b.ZD || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "a",
                                            La: ["ytp-ce-channel-title", "ytp-ce-link"],
                                            W: {
                                                href: O2(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1",
                                                dir: g.wp(b.title || "")
                                            },
                                            va: b.title
                                        }, b.subscribeButton ? {
                                            I: "div",
                                            S: "ytp-ce-subscribe-container",
                                            V: [{
                                                I: "div",
                                                S: "ytp-ce-channel-subscribe"
                                            }]
                                        } : "", b.subscribersText ? {
                                            I: "div",
                                            S: "ytp-ce-channel-subscribers-text",
                                            va: b.subscribersText
                                        } : "", b.metadata ? {
                                            I: "div",
                                            La: ["ytp-ce-channel-metadata", "yt-ui-ellipsis",
                                                "yt-ui-ellipsis-3"
                                            ],
                                            va: b.metadata
                                        } : ""]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            W: N2(b)
                        }]
                    };
                    c = new g.T(c);
                    var d = g.fe(document, "div", "ytp-ce-channel-subscribe", c.element)[0];
                    if (b.subscribeButton && b.channelId) {
                        g.np(d, "ytp-ce-subscribe-button");
                        if (a.player.U().B) {
                            var e = null;
                            var f = b.sessionData.itct
                        } else e = "endscreen", f = null;
                        e = new g.ZU(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, !!b.subscribeButton.enabled, !!b.subscribeButton.classic,
                            b.channelId, !!b.subscribeButton.subscribed, e, f, a.player, !1);
                        d.appendChild(e.element);
                        a.N.push(e)
                    }
                    break;
                case "WEBSITE":
                    a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-website"],
                        W: {
                            tabindex: "0",
                            "aria-label": b.ZD || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "div",
                                            S: "ytp-ce-website-title",
                                            W: {
                                                dir: g.wp(b.title || "")
                                            },
                                            va: b.title
                                        }, {
                                            I: "div",
                                            S: "ytp-ce-website-metadata",
                                            va: b.metadata
                                        }, {
                                            I: "a",
                                            La: ["ytp-ce-website-goto", "ytp-ce-link"],
                                            W: {
                                                href: O2(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            va: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            W: N2(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-icon",
                            W: Tcb(b.iconUrl)
                        }]
                    };
                    c = new g.T(a);
                    break;
                case "CREATOR_MERCHANDISE":
                    c = "", b.productPrice && (c = {
                        I: "div",
                        S: "ytp-ce-merchandise-price-container",
                        V: [{
                            I: "div",
                            S: "ytp-ce-merchandise-price",
                            va: b.productPrice
                        }]
                    }, b.additionalFeesText && c.V.push({
                        I: "div",
                        S: "ytp-ce-merchandise-additional-fees",
                        va: b.additionalFeesText
                    })), a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-merchandise"],
                        W: {
                            tabindex: "0",
                            "aria-label": b.ZD || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "div",
                                            S: "ytp-ce-merchandise-title",
                                            W: {
                                                dir: g.wp(b.title || "")
                                            },
                                            va: b.title
                                        }, c, {
                                            I: "div",
                                            S: "ytp-ce-merchandise-metadata",
                                            va: b.metadata
                                        }, {
                                            I: "a",
                                            La: ["ytp-ce-merchandise-goto", "ytp-ce-link"],
                                            W: {
                                                href: O2(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            va: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            W: N2(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-merchandise-invideo-cta-container",
                            V: [{
                                I: "div",
                                S: "ytp-ce-merchandise-invideo-cta",
                                va: b.callToAction || void 0
                            }]
                        }]
                    }, c = new g.T(a)
            }
            b.isPlaceholder && g.np(c.element, "ytp-ce-placeholder");
            return c
        },
        N2 = function(a) {
            if (a.HX) var b = a.HX.thumbnails;
            return Tcb(b ? b[b.length - 1].url : null)
        },
        Tcb = function(a) {
            return a ? {
                style: "background-image: url(" + a + ")"
            } : {}
        },
        Scb = function(a, b, c) {
            function d(m) {
                m && (b.listen("blur", function() {
                    m.style.display != "none" && a.Y && m.focus()
                }), b.T(m, "focus", f), b.T(m, "blur", h))
            }

            function e(m) {
                a.K += m;
                a.K > 0 ? (g.np(b.element, "ytp-ce-force-expand"), P2(a, c.id, !0)) : (g.pp(b.element, "ytp-ce-force-expand"), g.pp(b.element, "ytp-ce-element-hover"), P2(a, c.id, !1))
            }

            function f() {
                e(1)
            }

            function h() {
                e(-1)
            }
            b.listen("mouseenter", function() {
                Ucb(a, b, c)
            });
            b.listen("mouseleave", function() {
                Vcb(a, b, c)
            });
            a.player.U().B || b.listen("click", function() {
                g.np(b.element, "ytp-ce-element-hover")
            });
            b.listen("click", function(m) {
                Wcb(a, c, m)
            });
            b.listen("keypress", function(m) {
                Wcb(a, c, m)
            });
            b.listen("focus", function() {
                Ucb(a, b, c)
            });
            b.listen("blur", function() {
                Vcb(a, b, c)
            });
            b.listen("touchstart", function() {
                Ucb(a, b, c)
            });
            var l = g.he("ytp-ce-expanding-overlay-hider", b.element);
            l && b.T(l, "touchstart", function(m) {
                m.stopPropagation();
                g.pp(b.element, "ytp-ce-element-hover");
                g.pp(b.element, "ytp-ce-force-expand")
            });
            b.listen("keydown", function(m) {
                a.Y = m.keyCode === 9 && !m.shiftKey
            });
            d(g.he("ytp-sb-subscribe", b.element));
            d(g.he("ytp-sb-unsubscribe", b.element));
            b.listen("focus", f);
            b.listen("blur", h)
        },
        Wcb = function(a, b, c) {
            if (b.targetUrl && (!c || c.type !== "keypress" || c.keyCode === 13)) {
                for (var d = c.target; d && !g.mp(d, "ytp-ce-element");) {
                    g.mp(d, "subscribe-label") && Xcb(a, b);
                    if (g.mp(d, "ytp-ce-channel-subscribe")) return;
                    d = g.se(d)
                }
                if (!d || g.mp(d, "ytp-ce-element-hover")) {
                    c.preventDefault();
                    c.stopPropagation();
                    if (d = a.j[b.id]) Vcb(a, d, b), d.element.blur();
                    if (c.ctrlKey || c.metaKey || b.lea === "new") Xcb(a, b), a.player.sendVideoStatsEngageEvent(17, void 0), a.player.pauseVideo(), c = g.vd(O2(a, b.targetUrl)), c = g.qd(c), g.iA(c, void 0, b.sessionData);
                    else {
                        var e = g.YP(a.player.U()) || a.player.getVideoData().Ff,
                            f = function() {
                                var h = O2(a, b.targetUrl),
                                    l = b.sessionData,
                                    m = b.watchEndpoint,
                                    n = g.Vr(h);
                                e && n &&
                                    (n.v || n.list) ? a.player.mp(n.v, l, n.list, !1, void 0, m || void 0) : g.hA(h, l)
                            };
                        Xcb(a, b, function() {
                            a.player.sendVideoStatsEngageEvent(17, f)
                        })
                    }
                }
            }
        },
        O2 = function(a, b) {
            a = a.player.U();
            if (b) {
                if (b.startsWith("//")) return a.protocol + ":" + b;
                if (b.startsWith("/")) return g.fQ(a) + b
            } else return "";
            return b
        },
        Ucb = function(a, b, c) {
            g.mp(b.element, "ytp-ce-element-hover") || (c.type === "VIDEO" || c.type === "PLAYLIST" ? g.np(b.element, "ytp-ce-element-hover") : a.player.U().B ? (new g.fp(function() {
                g.np(b.element, "ytp-ce-element-hover")
            }, 200)).start() : g.np(b.element, "ytp-ce-element-hover"), Q2(a, c.F9), P2(a, c.id, !0))
        },
        Vcb = function(a, b, c) {
            g.pp(b.element, "ytp-ce-element-hover");
            g.pp(b.element, "ytp-ce-force-expand");
            P2(a, c.id, !1)
        },
        P2 = function(a, b, c) {
            a.B && (c ? a.D.show() : a.D.hide());
            for (var d = g.v(Object.keys(a.j)), e = d.next(); !e.done; e = d.next()) e = e.value, e !== b && g.rp(a.j[e].element, "ytp-ce-element-shadow-show", c)
        },
        Q2 = function(a, b, c) {
            function d() {
                f || (e++, e === b.length && (h.stop(), c && c()))
            }
            if (!b || b.length === 0 || L2(a)) c && c();
            else {
                b = Ycb(a, b);
                var e = 0,
                    f = !1,
                    h = new g.fp(function() {
                        f = !0;
                        c && c()
                    }, 1E3, a);
                h.start();
                for (a = 0; a < b.length; a++) g.Lv(b[a], d)
            }
        },
        Xcb = function(a, b, c) {
            Q2(a, b.clickUrls, c);
            (a = g.Bx()) && b.Q9 && g.fy(a, b.visualElement)
        },
        Ycb = function(a, b) {
            var c = a.player.getVideoData().clientPlaybackNonce;
            a = a.player.getCurrentTime().toFixed(2);
            c = {
                CPN: c,
                AD_CPN: c,
                MT: a
            };
            a = [];
            for (var d = 0; d < b.length; d++) a.push(Zcb(b[d], c));
            return a
        },
        Zcb = function(a, b) {
            return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(c) {
                var d = unescape(c);
                d = d.substring(1, d.length - 1);
                return b[d] ? escape(b[d]) : c
            })
        },
        $cb = function(a) {
            return typeof a === "string" ? a : ""
        },
        R2 = function(a, b, c) {
            for (var d in b)
                if (b[d] === a) return a;
            return c
        },
        adb = function(a, b, c, d) {
            this.value = a;
            this.target = b;
            this.showLinkIcon = c;
            this.j = d
        },
        S2 = function(a) {
            return a.value ? a.value : null
        },
        T2 = function(a) {
            if (!a) return null;
            var b = g.vd($cb(a.value));
            b = g.qd(b);
            if (!b) return null;
            var c = R2(a.target, bdb, "current");
            if (c == null) a = null;
            else {
                var d = a.show_link_icon;
                a = new adb(b, c, d === "true" || d === "false" ? d === "true" : !0, a.pause_on_navigation != null ? a.pause_on_navigation : !0)
            }
            return a
        },
        cdb = function(a, b, c) {
            this.type = a;
            this.trigger = b;
            this.url = c
        },
        fdb = function(a) {
            if (!a) return null;
            var b = R2(a.type, ddb),
                c = R2(a.trigger, edb);
            a = a.url;
            a = Array.isArray(a) && a.length ? a[0] : a;
            a = T2(a ? a : null);
            return b ? new cdb(b, c, a) : null
        },
        gdb = function(a, b, c, d, e) {
            this.id = a;
            this.type = b;
            this.style = c;
            this.data = e;
            this.action = d || []
        },
        hdb = function(a, b) {
            return g.pb(a.action, b)
        },
        idb = function(a, b) {
            this.context = a;
            this.j = b
        },
        jdb = function(a) {
            return a.customMessage ? U2("div", "iv-card-message", a.customMessage) : ""
        },
        V2 = function(a, b) {
            a = "background-image: url(" + a + ");";
            var c = [];
            b && c.push(b);
            return {
                I: "div",
                S: "iv-card-image",
                W: {
                    style: a
                },
                V: c
            }
        },
        kdb = function(a) {
            if (!a.metaInfo || a.metaInfo.length === 0) return "";
            var b = [];
            a = g.v(a.metaInfo);
            for (var c = a.next(); !c.done; c = a.next()) b.push(U2("li", "", c.value));
            return {
                I: "ul",
                S: "iv-card-meta-info",
                V: b
            }
        },
        U2 = function(a, b, c) {
            b ? typeof b === "string" ? b = {
                "class": b
            } : Array.isArray(b) && (b = {
                "class": b.join(" ")
            }) : b = {};
            b.dir = g.wp(c);
            return {
                I: a,
                W: b,
                va: c
            }
        },
        ldb = function(a) {
            if (!a.customMessage) return "";
            var b = ["iv-card-action", "iv-card-primary-link"],
                c = {};
            a.kE && (b.push("iv-card-action-icon"), c.style = "background-image: url(" + a.kE + ");");
            c.dir = g.wp(a.customMessage);
            var d = [{
                I: "span",
                va: a.customMessage
            }];
            a.showLinkIcon && (d.push("\u00a0"), d.push({
                I: "span",
                S: "iv-card-link-icon"
            }));
            return {
                I: "div",
                La: b,
                W: c,
                V: d
            }
        },
        W2 = function(a, b, c, d) {
            if (d) {
                b = g.v(b);
                for (var e = b.next(); !e.done; e = b.next()) a.j(e.value, d, c.id, c.sessionData, c.jj.click, 5)
            }
        },
        mdb = function(a, b) {
            this.merchant = a;
            this.price = b
        },
        ndb = function(a) {
            var b;
            (b = a) && !(b = a.length > 1 ? a.charAt(0) === "/" && a.charAt(1) !== "/" : a === "/") && (b = a.replace(/^(https?:)?\/\//, "").split("/", 1), b = !b || b.length < 1 || !b[0] ? [] : b[0].toLowerCase().split(".").reverse(), b = b[0] === "com" && b[1] === "youtube" || b[0] === "be" && b[1] === "youtu");
            return b ? a.indexOf("/redirect?") === -1 : !1
        },
        odb = function(a, b) {
            return b ? b : ndb(a) ? "current" : "new"
        },
        X2 = function(a, b) {
            g.K.call(this);
            var c = this;
            this.element = a;
            this.context = b;
            this.rb = !1;
            this.Wa = new Map;
            this.bb = new Map;
            this.context.J.addEventListener(g.iE("annotations_module"), function(d) {
                (d = c.Wa.get(d)) && d.apply(c)
            });
            this.context.J.addEventListener(g.jE("annotations_module"), function(d) {
                (d = c.bb.get(d)) && d.apply(c)
            })
        },
        Y2 = function(a, b, c, d, e, f, h) {
            a.context.j.listen(b, "click", function(l) {
                a.GN(c, d, e, f || [], h || 0, l)
            });
            a.context.j.listen(b, "touchstart", function() {
                a.rb = !1
            });
            a.context.j.listen(b, "touchmove", function() {
                a.rb = !0
            })
        },
        pdb = function(a) {
            var b;
            return ((b = g.R(a, g.Py)) == null ? 0 : b.url) ? g.R(a, g.Py).url : (a = g.R(a, g.iR)) && a.videoId ? (b = "/watch?v=" + a.videoId, a.playlistId && (b += "&list=" + a.playlistId), a.index && (b += "&index=" + a.index), a.startTimeSeconds && (b += "&t=" + a.startTimeSeconds), b) : null
        },
        Z2 = function(a, b, c) {
            return {
                iZ: (a.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                click: (c.loggingUrls || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                close: (b.dismissLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                D2: (b.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                AM: (b.clickLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                })
            }
        },
        qdb = function(a, b, c) {
            X2.call(this, b, c);
            var d = this;
            this.J = a;
            this.eventId = null;
            this.zb = this.Na = this.Kb = this.C = this.isInitialized = !1;
            this.cards = [];
            this.Bb = this.Z = this.Ka = this.G = this.Va = this.j = null;
            this.qa = [];
            this.ra = this.N = this.Cf = this.Fa = null;
            this.K = 0;
            this.Ga = new g.fp(function() {}, c.X.Wk ? 4E3 : 3E3);
            g.Q(this, this.Ga);
            this.fb = new g.fp(function() {});
            g.Q(this, this.fb);
            this.Ca = new idb(c, function(e, f, h, l, m, n) {
                Y2(d, e, f, h, l, m, n)
            });
            this.Y = new g.T({
                I: "div",
                S: "iv-drawer",
                W: {
                    id: "iv-drawer"
                },
                V: [{
                    I: "div",
                    S: "iv-drawer-header",
                    W: {
                        "aria-role": "heading"
                    },
                    V: [{
                        I: "span",
                        S: "iv-drawer-header-text"
                    }, {
                        I: "button",
                        La: ["iv-drawer-close-button", "ytp-button"],
                        W: {
                            "aria-label": "Hide cards",
                            tabindex: "0"
                        }
                    }]
                }, {
                    I: "div",
                    S: "iv-drawer-content"
                }]
            });
            g.Q(this, this.Y);
            this.D = this.Y.element;
            this.Xa = new g.gz(this.Y, 330);
            g.Q(this, this.Xa);
            this.Jb = g.he("iv-drawer-header-text", this.D);
            this.B = g.he("iv-drawer-content", this.D);
            this.addCueRange(0, c.videoData.lengthSeconds *
                1E3, "",
                function() {
                    d.Kb && $2(d, "YOUTUBE_DRAWER_AUTO_OPEN")
                },
                function() {
                    (d.Kb = d.C) && a3(d)
                });
            this.Ra = new g.EF(this);
            g.Q(this, this.Ra);
            this.J.addEventListener("videodatachange", this.ju.bind(this))
        },
        rdb = function(a, b) {
            b = b.data;
            b.autoOpenMs && a.addCueRange(b.autoOpenMs, 0x8000000000000, "", function() {
                $2(a, "YOUTUBE_DRAWER_AUTO_OPEN")
            });
            b.autoCloseMs && a.addCueRange(b.autoCloseMs, 0x8000000000000, "", function() {
                a3(a)
            });
            var c = b.headerText;
            g.ue(a.Jb, c);
            a.Z && a.Z.setAttribute("title", c);
            b.eventId && (a.eventId = b.eventId);
            a.Fa = g.yx(b.trackingParams);
            a.N = g.yx(b.closeTrackingParams);
            a.Cf = g.yx(b.iconTrackingParams)
        },
        sdb = function(a, b) {
            var c = b.cardId ? b.cardId : "cr:" + a.K,
                d = a.J.U().experiments.ob("enable_error_corrections_infocard_web_client");
            if (!b.content && b.teaser.simpleCardTeaserRenderer && d) {
                var e = b.teaser.simpleCardTeaserRenderer,
                    f = b.icon ? b.icon.infoCardIconRenderer : null;
                b = {
                    id: c,
                    timestamp: a.K,
                    type: "simple",
                    teaserText: g.uy(e.message),
                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                    autoOpen: !!b.autoOpen,
                    sessionData: {},
                    sponsored: !1,
                    jj: {},
                    Hp: null,
                    Qj: e.trackingParams ? g.yx(e.trackingParams) : null,
                    Cf: f && f.trackingParams ? g.yx(f.trackingParams) : null,
                    imageUrl: "",
                    displayDomain: null,
                    showLinkIcon: !1,
                    kE: null,
                    title: "",
                    customMessage: "",
                    url: null,
                    onClickCommand: e.onTapCommand || null
                };
                b3(a, b)
            } else {
                var h;
                if ((h = b.content) == null ? 0 : h.simpleCardContentRenderer) {
                    if (!b.cueRanges.length) return;
                    f = (e = b.content) == null ? void 0 : e.simpleCardContentRenderer;
                    e = b.teaser.simpleCardTeaserRenderer;
                    var l = b.icon ? b.icon.infoCardIconRenderer : null;
                    b = {
                        id: c,
                        timestamp: a.K,
                        type: "simple",
                        teaserText: g.uy(e.message),
                        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                        startMs: Number(b.cueRanges[0].startCardActiveMs),
                        autoOpen: !!b.autoOpen,
                        sessionData: c3(a, c, b, f),
                        sponsored: !1,
                        jj: Z2(f, e, f.command),
                        Hp: f.trackingParams ? g.yx(f.trackingParams) : null,
                        Qj: e.trackingParams ? g.yx(e.trackingParams) : null,
                        Cf: l && l.trackingParams ? g.yx(l.trackingParams) : null,
                        imageUrl: d3(f.image.thumbnails, 290).url,
                        displayDomain: f.displayDomain ? g.uy(f.displayDomain) : null,
                        showLinkIcon: !!f.showLinkIcon,
                        kE: null,
                        title: f.title ? g.uy(f.title) : "",
                        customMessage: f.callToAction ? g.uy(f.callToAction) : "",
                        url: g.R(f.command, g.Py).url ? T2({
                            pause_on_navigation: !a.context.videoData.isLivePlayback,
                            target: "new",
                            value: g.R(f.command, g.Py).url
                        }) : null,
                        onClickCommand: null
                    };
                    b3(a, b)
                } else {
                    var m;
                    if ((m = b.content) == null ? 0 : m.collaboratorInfoCardContentRenderer) {
                        if (!b.cueRanges.length) return;
                        e = (f = b.content) == null ? void 0 : f.collaboratorInfoCardContentRenderer;
                        f = b.teaser.simpleCardTeaserRenderer;
                        l = b.icon ? b.icon.infoCardIconRenderer : null;
                        b = {
                            id: c,
                            timestamp: a.K,
                            type: "collaborator",
                            teaserText: g.uy(f.message),
                            teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                            startMs: Number(b.cueRanges[0].startCardActiveMs),
                            autoOpen: !!b.autoOpen,
                            sessionData: c3(a, c, b, e),
                            sponsored: !1,
                            jj: Z2(e, f, e.endpoint),
                            Hp: e.trackingParams ? g.yx(e.trackingParams) : null,
                            Qj: f.trackingParams ? g.yx(f.trackingParams) : null,
                            Cf: l && l.trackingParams ? g.yx(l.trackingParams) : null,
                            channelId: g.R(e.endpoint, g.BR).browseId,
                            customMessage: e.customText ? g.uy(e.customText) : null,
                            profileImageUrl: d3(e.channelAvatar.thumbnails, 290).url,
                            title: e.channelName ? g.uy(e.channelName) : "",
                            metaInfo: [e.subscriberCountText ? g.uy(e.subscriberCountText) : ""],
                            url: T2({
                                pause_on_navigation: !a.context.videoData.isLivePlayback,
                                target: "new",
                                value: g.R(e.endpoint, g.BR).canonicalBaseUrl ? g.R(e.endpoint, g.BR).canonicalBaseUrl : "/channel/" + g.R(e.endpoint, g.BR).browseId
                            }),
                            onClickCommand: null
                        };
                        b3(a, b)
                    } else {
                        var n;
                        if ((n = b.content) == null ? 0 : n.playlistInfoCardContentRenderer) {
                            if (!b.cueRanges.length) return;
                            e = (l = b.content) == null ? void 0 : l.playlistInfoCardContentRenderer;
                            f = b.teaser.simpleCardTeaserRenderer;
                            l = b.icon ? b.icon.infoCardIconRenderer : null;
                            b = {
                                id: c,
                                timestamp: a.K,
                                type: "playlist",
                                teaserText: g.uy(f.message),
                                teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                startMs: Number(b.cueRanges[0].startCardActiveMs),
                                autoOpen: !!b.autoOpen,
                                sessionData: c3(a, c, b, e),
                                sponsored: !1,
                                jj: Z2(e, f, e.action),
                                Hp: e.trackingParams ? g.yx(e.trackingParams) : null,
                                Qj: f.trackingParams ? g.yx(f.trackingParams) : null,
                                Cf: l && l.trackingParams ? g.yx(l.trackingParams) : null,
                                OH: d3(e.playlistThumbnail.thumbnails, 258).url,
                                customMessage: e.customMessage ? g.uy(e.customMessage) : null,
                                playlistVideoCount: g.uy(e.playlistVideoCount),
                                title: e.playlistTitle ? g.uy(e.playlistTitle) : "",
                                metaInfo: [e.channelName ? g.uy(e.channelName) :
                                    "", e.videoCountText ? g.uy(e.videoCountText) : ""
                                ],
                                url: T2({
                                    pause_on_navigation: !a.context.videoData.isLivePlayback,
                                    target: "new",
                                    value: pdb(e.action)
                                }),
                                onClickCommand: null
                            };
                            b3(a, b)
                        } else {
                            var p;
                            if ((p = b.content) == null ? 0 : p.videoInfoCardContentRenderer) {
                                if (!b.cueRanges.length) return;
                                var q;
                                e = (q = b.content) == null ? void 0 : q.videoInfoCardContentRenderer;
                                f = b.teaser.simpleCardTeaserRenderer;
                                l = b.icon ? b.icon.infoCardIconRenderer : null;
                                b = {
                                    id: c,
                                    timestamp: a.K,
                                    type: "video",
                                    teaserText: g.uy(f.message),
                                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                                    autoOpen: !!b.autoOpen,
                                    sessionData: c3(a, c, b, e),
                                    sponsored: !1,
                                    jj: Z2(e, f, e.action),
                                    Hp: e.trackingParams ? g.yx(e.trackingParams) : null,
                                    Qj: f.trackingParams ? g.yx(f.trackingParams) : null,
                                    Cf: l && l.trackingParams ? g.yx(l.trackingParams) : null,
                                    OH: d3(e.videoThumbnail.thumbnails, 258).url,
                                    videoDuration: e.lengthString ? g.uy(e.lengthString) : null,
                                    customMessage: e.customMessage ? g.uy(e.customMessage) : null,
                                    title: e.videoTitle ? g.uy(e.videoTitle) : "",
                                    metaInfo: [e.channelName ? g.uy(e.channelName) :
                                        "", e.viewCountText ? g.uy(e.viewCountText) : ""
                                    ],
                                    isLiveNow: !!e.badge,
                                    url: T2({
                                        pause_on_navigation: !a.context.videoData.isLivePlayback,
                                        target: "new",
                                        value: pdb(e.action)
                                    }),
                                    onClickCommand: null
                                };
                                b3(a, b)
                            }
                        }
                    }
                }
            }
            a.K++
        },
        d3 = function(a, b) {
            for (var c = -1, d = -1, e = 0; e < a.length; e++) {
                if (a[e].height === b || a[e].width === 290) return a[e];
                ((a[e].height || 0) < b || (a[e].width || 0) < 290) && (c < 0 || (a[c].height || 0) < (a[e].height || 0) || (a[c].width || 0) < (a[e].width || 0)) ? c = e: ((a[e].height || 0) >= b || (a[e].width || 0) >= 290) && (d < 0 || (a[d].height || 0) > (a[e].height || 0) || (a[d].width || 0) > (a[e].width || 0)) && (d = e)
            }
            return a[d >= 0 ? d : c]
        },
        c3 = function(a, b, c, d) {
            return {
                feature: c.feature ? c.feature : "cards",
                src_vid: a.context.videoData.videoId,
                annotation_id: b,
                ei: a.context.videoData.eventId || "",
                itct: d.trackingParams || ""
            }
        },
        udb = function(a, b) {
            if (b = tdb(a, b)) b === a.j && (a.j = null), a.J.removeCueRange(b.xf.id), g.re(b.wO), g.ub(a.cards, b), a.RI(), e3(a)
        },
        $2 = function(a, b, c) {
            if (!a.C) {
                a.Xa.show();
                a.Va = new g.fp(function() {
                    g.np(a.context.J.getRootNode(), g.CX.IV_DRAWER_OPEN)
                }, 0);
                a.Va.start();
                a.Ra.T(a.B, "mousewheel", function(h) {
                    a.Ga.start();
                    h.preventDefault();
                    h = h || window.event;
                    var l = 0;
                    h.type == "MozMousePixelScroll" ? l = 0 == (h.axis == h.HORIZONTAL_AXIS) ? h.detail : 0 : window.opera ? l = h.detail : l = h.wheelDelta % 120 == 0 ? "WebkitTransform" in document.documentElement.style ? window.chrome && navigator.platform.indexOf("Mac") == 0 ? h.wheelDeltaY / -30 : h.wheelDeltaY / -1.2 : h.wheelDelta / -1.6 : h.wheelDeltaY / -3;
                    if (h = l) a.B.scrollTop += h
                });
                a.C = !0;
                var d = g.Bx();
                d && a.Fa && a.N && g.dy(d, [a.Fa, a.N]);
                b = {
                    TRIGGER_TYPE: b
                };
                for (var e = g.v(a.cards), f = e.next(); !f.done; f = e.next()) f = f.value, f.g_ || (f.g_ = !0, vdb(a.context.logger, f.xf.jj.iZ, b)), d && g.dy(d, [f.xf.Hp]);
                C2(a.J);
                c && (a.G = new g.fp(function() {
                    a.Ka = a.Z;
                    a.Bb.focus()
                }, 330), a.G.start())
            }
        },
        a3 = function(a) {
            a.C && (a.Xa.hide(), g.ut(a.Ra), g.pp(a.context.J.getRootNode(), g.CX.IV_DRAWER_OPEN), a.C = !1, C2(a.J), a.G && a.G.stop(), a.G = new g.fp(function() {
                a.Ka && (a.Ka.focus(), a.Ka = null)
            }, 330), a.G.start())
        },
        wdb = function(a) {
            g.op(a.Ib(), [g.CX.STOP_EVENT_PROPAGATION,
                "iv-drawer-manager"
            ]);
            g.KS(a.J, a.D, 5);
            a.CI();
            a.Z = g.he("ytp-cards-button", a.J.getRootNode());
            a.Bb = g.he("iv-drawer-close-button", a.D);
            a.isInitialized = !0
        },
        xdb = function(a) {
            a.qa.push(g.cw("iv-teaser-shown", a.o6, a));
            a.qa.push(g.cw("iv-teaser-hidden", a.j$, a));
            a.qa.push(g.cw("iv-teaser-clicked", a.n6, a));
            a.zb = !0
        },
        ydb = function(a, b) {
            var c;
            return b.onClickCommand && ((c = g.R(b.onClickCommand, g.tab)) == null ? void 0 : c.targetId) === "engagement-panel-error-corrections" ? (a.ra = b, !0) : !1
        },
        zdb = function(a, b) {
            a.ra = b;
            var c = a.J.getVideoData();
            if (!c) return !1;
            c = g.BQ(c);
            if (c == null ? 0 : c.markersMap)
                for (var d, e = 0;
                    ((d = c) == null ? void 0 : d.markersMap.length) > e; e++) {
                    var f = void 0,
                        h = (f = c) == null ? void 0 : f.markersMap[e];
                    if (h.key === "ERROR_CORRECTION_MARKERS" && (f = void 0, (h = (f = h.value) == null ? void 0 : f.markers) && h.length > 0)) return d = void 0, b.startMs = ((d = g.R(h[0], g.sSa)) == null ? void 0 : d.timeRangeStartMillis) || 0, a.ra = null, !0
                }
            return !1
        },
        b3 = function(a, b) {
            if (!ydb(a, b) || zdb(a, b)) {
                var c = Adb(a, b);
                if (c) {
                    var d = {
                        xf: b,
                        wO: c.element,
                        g_: !1
                    };
                    if (b.onClickCommand) a.J.L("web_infocards_teaser_show_logging_fix") && (a.zb || xdb(a), udb(a, b.id), c = a.findLastIndex(d), g.Fb(a.cards, c, 0, d));
                    else {
                        a.isInitialized || wdb(a);
                        udb(a, b.id);
                        var e = a.findLastIndex(d);
                        g.Fb(a.cards, e, 0, d);
                        c.Ja(a.B, e);
                        a.RI()
                    }
                    b.autoOpen ? a.addCueRange(b.startMs, 0x8000000000000, b.id, function() {
                        a.C || (a.j = d, e3(a), Bdb(a, d), $2(a, "YOUTUBE_DRAWER_AUTO_OPEN", !1))
                    }) : (c = a.context.J.getCurrentTime() * 1E3, c < 5E3 && c > b.startMs && Cdb(a, d), a.addCueRange(b.startMs,
                        b.startMs + 1, b.id,
                        function() {
                            Cdb(a, d)
                        }), e3(a))
                }
            }
        },
        Adb = function(a, b) {
            switch (b.type) {
                case "simple":
                    a = a.Ca;
                    var c = b.displayDomain ? {
                        I: "div",
                        S: "iv-card-image-text",
                        va: b.displayDomain
                    } : void 0;
                    var d = ldb(b);
                    c = {
                        I: "div",
                        La: ["iv-card"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            W: {
                                href: b.url ? S2(b.url) || "" : ""
                            },
                            V: [V2(b.imageUrl, c), {
                                I: "div",
                                S: "iv-card-content",
                                V: [U2("h2", void 0, b.title), d]
                            }]
                        }]
                    };
                    c = new g.T(c);
                    W2(a, g.ge("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "collaborator":
                    a = a.Ca;
                    c = {
                        I: "div",
                        La: ["iv-card", "iv-card-channel"],
                        V: [{
                            I: "a",
                            La: ["iv-click-target"],
                            W: {
                                href: S2(b.url) || "",
                                "data-ytid": b.channelId
                            },
                            V: [V2(b.profileImageUrl),
                                {
                                    I: "div",
                                    S: "iv-card-content",
                                    V: [jdb(b), {
                                        I: "h2",
                                        S: "iv-card-primary-link",
                                        va: b.title
                                    }, kdb(b)]
                                }
                            ]
                        }]
                    };
                    c = new g.T(c);
                    W2(a, g.ge("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "playlist":
                    a = a.Ca;
                    c = {
                        I: "div",
                        La: ["iv-card", "iv-card-playlist"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            W: {
                                href: S2(b.url) || ""
                            },
                            V: [V2(b.OH, {
                                I: "div",
                                S: "iv-card-image-overlay",
                                V: [{
                                    I: "span",
                                    S: "iv-card-playlist-video-count",
                                    va: b.playlistVideoCount
                                }]
                            }), {
                                I: "div",
                                S: "iv-card-content",
                                V: [jdb(b), U2("h2", "iv-card-primary-link", b.title), kdb(b)]
                            }]
                        }]
                    };
                    c = new g.T(c);
                    W2(a, g.ge("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "productListing":
                    a = a.Ca;
                    var e = b.offers.length != 0;
                    c = ["iv-card"];
                    d = "";
                    var f = ldb(b);
                    e && (c.push("iv-card-product-listing"), d = "iv-card-primary-link", f = b.offers[0], e = [], f.price && e.push({
                        I: "div",
                        S: "iv-card-offer-price",
                        va: f.price
                    }), f.merchant && e.push({
                        I: "div",
                        S: "iv-card-offer-merchant",
                        va: f.merchant
                    }), f = {
                        I: "div",
                        V: e
                    });
                    e = b.url ? S2(b.url) || "" : "";
                    c = {
                        I: "div",
                        La: c,
                        W: {
                            tabindex: "0"
                        },
                        V: [{
                            I: "a",
                            La: ["iv-card-image", "iv-click-target"],
                            W: {
                                style: "background-image: url(" +
                                    b.imageUrl + ");",
                                href: e,
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }
                        }, {
                            I: "div",
                            S: "iv-card-content",
                            V: [b.sponsored ? {
                                I: "div",
                                S: "iv-card-sponsored",
                                V: ["Sponsored", {
                                    I: "div",
                                    S: "iv-ad-info-container",
                                    V: [{
                                        I: "div",
                                        S: "iv-ad-info",
                                        va: "{{adInfo}}"
                                    }, {
                                        I: "div",
                                        S: "iv-ad-info-icon-container",
                                        V: [{
                                            I: "div",
                                            S: "iv-ad-info-icon"
                                        }, {
                                            I: "div",
                                            S: "iv-ad-info-callout"
                                        }]
                                    }]
                                }]
                            } : "", {
                                I: "a",
                                S: "iv-click-target",
                                W: {
                                    href: e
                                },
                                V: [U2("h2", d, b.title), f]
                            }]
                        }]
                    };
                    c = new g.T(c);
                    d = g.me("span");
                    g.ue(d, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
                    c.Cd(d, "adInfo");
                    W2(a, g.ge("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "video":
                    a = a.Ca;
                    d = b.videoDuration ? {
                        I: "span",
                        S: "iv-card-video-duration",
                        va: b.videoDuration
                    } : void 0;
                    f = b.isLiveNow ? {
                        I: "span",
                        La: ["yt-badge", "yt-badge-live"],
                        va: "LIVE NOW"
                    } : null;
                    e = {
                        I: "div",
                        La: ["iv-card", "iv-card-video"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            W: {
                                href: ((c = b.url) == null ? void 0 : S2(c)) || ""
                            },
                            V: [V2(b.OH, d), {
                                I: "div",
                                S: "iv-card-content",
                                V: [jdb(b), U2("h2", "iv-card-primary-link", b.title), kdb(b), f]
                            }]
                        }]
                    };
                    c = new g.T(e);
                    W2(a, g.ge("iv-click-target",
                        c.element), b, b.url);
                    b = c;
                    break;
                default:
                    return null
            }
            return b
        },
        Ddb = function(a) {
            if (a.j) return a.j.xf.type === "productListing";
            if (a.J.L("enable_wn_infocards")) {
                var b;
                return !((b = a.cards) == null || !b.length) && g.Cl(a.cards, function(c) {
                    return c.xf.type === "productListing"
                })
            }
            return g.Cl(a.cards, function(c) {
                return c.xf.type === "productListing"
            })
        },
        e3 = function(a) {
            g.rp(a.J.getRootNode(), "ytp-cards-shopping-active", Ddb(a))
        },
        Cdb = function(a, b) {
            if (!g.mp(a.J.getRootNode(), "ytp-cards-teaser-shown")) {
                if (a.j !== b) {
                    var c = g.Bx(),
                        d = a.j ? a.j.xf.Cf : a.Cf;
                    c && d && g.ey(c, [d]);
                    a.j = b;
                    e3(a)
                }(c = a.isInitialized && a.Ib().style.display == "none") || (c = a.context.J.getPlayerState(), d = c === 0 && a.context.J.getCurrentTime() === 0, c = !(c === 1 || c === 3 || d));
                c || b.xf.teaserDurationMs && a.J.kC(!0, {
                    teaserText: b.xf.teaserText,
                    durationMs: b.xf.teaserDurationMs,
                    onClickCommand: b.xf.onClickCommand
                });
                a.fb.isActive() || ((!a.C || !a.Ga.isActive() && a.Na) && Bdb(a, b), a.fb.start(910 + b.xf.teaserDurationMs))
            }
        },
        Bdb = function(a, b) {
            a.Y.Hb ? (b = new H2([0,
                a.B.scrollTop
            ], [0, b.wO.offsetTop], 600, Jcb), a.context.C.listen(b, "animate", function(c) {
                a.B.scrollTop = c.y
            }), a.context.C.listen(b, "finish", function(c) {
                a.B.scrollTop = c.y
            }), b.play()) : (g.py(a.Y, !0), a.B.scrollTop = b.wO.offsetTop, g.py(a.Y, !1))
        },
        f3 = function(a) {
            return a.j && a.j.xf ? a.j.xf : a.cards[0] && a.cards[0].xf ? a.cards[0].xf : null
        },
        tdb = function(a, b) {
            return g.pb(a.cards, function(c) {
                return c.xf.id === b
            })
        },
        g3 = function(a, b, c) {
            X2.call(this, a, b);
            this.annotation = c;
            this.isActive = !1
        },
        Edb = function(a) {
            var b = a.annotation.data;
            "start_ms" in b && "end_ms" in b && a.addCueRange(b.start_ms, b.end_ms, a.annotation.id, function() {
                a.show()
            }, function() {
                a.hide()
            })
        },
        h3 = function(a, b, c) {
            g3.call(this, a, b, c);
            this.B = null;
            this.N = !1;
            this.C = null;
            this.D = !1;
            this.j = this.K = this.G = null
        },
        Fdb = function(a, b) {
            var c = c === void 0 ? 0 : c;
            var d = Acb(b).width;
            g.rm(b, d);
            c = new Hcb(b, [d, b.offsetTop], [d - d - c, b.offsetTop], 200, Icb);
            g.Q(a, c);
            a.context.C.listen(c, "begin", function() {
                g.xm(b, !0)
            });
            c.play()
        },
        Idb = function(a, b) {
            if (b.channel_name) {
                var c = a.createElement({
                        I: "div",
                        La: ["iv-branding-context-name"],
                        va: b.channel_name
                    }),
                    d = a.createElement({
                        I: "div",
                        La: ["iv-branding-context-subscribe"]
                    }),
                    e = b.standalone_subscribe_button_data;
                e && (a.j = new g.ZU(e.subscribeText, e.subscribeCount, e.unsubscribeText, e.unsubscribeCount, !!e.enabled, !!e.classic, b.channel_id, !!e.subscribed, e.feature, b.session_data.itct, a.context.J, !1), a.j.Ja(d));
                var f = a.createElement({
                        I: "div",
                        La: ["iv-branding-context-subscribe-caret"]
                    }),
                    h = a.createElement({
                        I: "div",
                        La: ["branding-context-container-inner"]
                    });
                h.appendChild(f);
                h.appendChild(c);
                h.appendChild(d);
                g.xm(h, !1);
                var l = a.createElement({
                    I: "div",
                    La: ["branding-context-container-outer"]
                });
                l.appendChild(h);
                g.km(l, "right", b.image_width + "px");
                g.oe(a.Ib(), l);
                a.C = new g.fp(function() {
                    Gdb(a, h, l)
                }, 500);
                g.Q(a, a.C);
                a.context.j.listen(a.Ib(), "mouseover", function() {
                    Hdb(a, h, l, f, b.image_height)
                });
                a.context.j.listen(a.Ib(), "mouseout", function() {
                    a.C.start()
                })
            }
        },
        Hdb = function(a, b, c, d, e) {
            a.C.stop();
            if (!a.D) {
                var f = g.wm(b);
                a.j || (b.style.width = g.qm(f.width, !0), c.style.width = g.qm(f.width, !0));
                g.km(d, "top", f.height - Math.max(Math.min(f.height, e) / 2 + 10, 20) + "px");
                g.km(d, "right", "1px");
                a.D = !0;
                g.xm(b, !0);
                a.G = new g.fp(function() {
                    g.np(this.Ib(), "iv-branding-active")
                }, 0, a);
                a.G.start()
            }
        },
        Gdb = function(a, b, c) {
            g.pp(a.Ib(), "iv-branding-active");
            a.K = new g.fp(function() {
                g.xm(b, !1);
                a.j || (c.style.width = g.qm(0, !0))
            }, 250);
            a.K.start();
            a.D = !1
        },
        Jdb = function(a, b, c, d, e, f, h) {
            this.j = a;
            this.C = b;
            this.X = c;
            this.videoData = d;
            this.logger = e;
            this.J = f;
            this.B = h
        },
        Kdb = function(a, b, c) {
            g3.call(this, a, b, c);
            var d = this;
            this.Z = this.isCollapsed = this.Y = !1;
            this.K = 5E3;
            this.B = this.C = this.j = this.D = null;
            this.N = this.createElement({
                I: "div",
                La: ["iv-promo-contents"]
            });
            this.G = new g.fp(function() {
                d.j.setAttribute("aria-hidden", "true");
                g.xm(d.C, !1);
                g.xm(d.B, !0)
            }, 700, this);
            g.Q(this, this.G)
        },
        Ndb = function(a, b, c) {
            c.stopPropagation();
            Ldb(a);
            Mdb(a, b);
            a.j.focus()
        },
        Odb = function(a) {
            a.isCollapsed || a.Z || a.D || (g.np(a.Ib(), "iv-promo-collapsed"), a.isCollapsed = !0, a.G.start())
        },
        Ldb = function(a) {
            a.G.stop();
            a.isCollapsed && (g.qp(a.Ib(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), a.isCollapsed = !1, a.j && a.j.removeAttribute("aria-hidden"), g.xm(a.B, !1), g.xm(a.C, !0))
        },
        Mdb = function(a, b) {
            a.D || (a.D = g.Re(function() {
                Pdb(this);
                Odb(this)
            }, b, a))
        },
        Pdb = function(a) {
            a.D && (g.La.clearTimeout(a.D), a.D = null)
        },
        Qdb = function(a) {
            this.J = a
        },
        vdb = function(a, b, c) {
            b && (c ? i3(a, b.map(function(d) {
                return g.Ho(d, c)
            })) : i3(a, b))
        },
        i3 = function(a, b, c, d) {
            var e = 1,
                f = void 0,
                h = -1;
            if (c) {
                var l = !1;
                f = function() {
                    e--;
                    e || l || (clearTimeout(h), l = !0, c())
                };
                h = setTimeout(function() {
                    l = !0;
                    c()
                }, 1E3)
            }
            b = g.v(b || []);
            for (var m = b.next(); !m.done; m = b.next()) m = m.value, e++, g.Lv(m, f);
            d && (e++, d !== 0 && a.J.sendVideoStatsEngageEvent(d, f))
        },
        Rdb = function(a) {
            g.jU.call(this, a);
            var b = this;
            this.qa = this.Z = !1;
            this.loadNumber = 0;
            this.K = {};
            this.logger = new Qdb(this.player);
            this.D = new g.EF(this);
            this.G = this.N = null;
            this.events = new g.EF(this);
            this.Yg = this.Y = this.j = null;
            this.ra = [];
            g.Q(this, this.D);
            this.D.T(this.player, "onVideoAreaChange", function() {
                b.publish("onVideoAreaChange")
            });
            this.D.T(this.player, "onHideControls", function() {
                b.publish("onHideControls")
            });
            this.D.T(this.player, "onShowControls", function() {
                b.publish("onShowControls")
            });
            this.D.T(this.player, "resize", function(d) {
                b.publish("resize", d)
            });
            this.D.T(this.player, "presentingplayerstatechange", function(d) {
                b.publish("presentingplayerstatechange", d)
            });
            this.subscribe("presentingplayerstatechange", this.p6, this);
            this.subscribe("resize", this.qL, this);
            this.player.U().Na.subscribe("vast_info_card_add", this.x0, this);
            g.Q(this, this.events);
            this.Ca = this.createElement({
                I: "div",
                S: "video-custom-annotations"
            });
            this.B = new g.T({
                I: "div",
                La: ["ytp-player-content", "ytp-iv-player-content"]
            });
            g.Q(this, this.B);
            g.KS(this.player, this.B.element, 4);
            this.B.hide();
            this.C = new g.T({
                I: "div",
                La: ["ytp-iv-video-content"]
            });
            g.Q(this, this.C);
            a = this.createElement({
                I: "div",
                S: "video-annotations"
            });
            a.appendChild(this.Ca);
            this.C.element.appendChild(a);
            this.uv() && this.load();
            var c = this.createElement({
                I: "style"
            });
            (g.ee("HEAD")[0] || document.body).appendChild(c);
            this.addOnDisposeCallback(function() {
                g.re(c)
            });
            if (a = c.sheet) a.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), a.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                0), a.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), a.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0), a.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), a.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                0), a.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), a.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                0)
        },
        Sdb = function(a) {
            a = a.createElement({
                I: "div",
                La: ["annotation", "annotation-type-custom"]
            });
            g.xm(a, !1);
            return a
        },
        Tdb = function(a, b) {
            b = !b.isCued() && !g.U(b, 1024);
            g.py(a.B, b);
            g.py(a.C, b)
        },
        Udb = function(a, b, c) {
            a.Z = !0;
            a.G = g.ps(b, c)
        },
        Vdb = function(a, b) {
            for (var c = {}, d = g.v(b.attributes), e = d.next(); !e.done; e = d.next()) e = e.value, c[e.name] = e.nodeValue;
            for (d = 0; d < b.childNodes.length; d++)
                if (e = b.childNodes[d], g.Ta(e) && e.nodeType == 1) {
                    if (c[e.tagName]) var f = c[e.tagName];
                    else if (e.tagName === "data") {
                        e.childNodes.length > 0 && (f = e.childNodes[0].nodeValue, c[e.tagName] = typeof f === "string" ? f.trim() : f);
                        continue
                    } else f = [], c[e.tagName] = f;
                    e && e.tagName === "TEXT" ? e.childNodes.length === 1 && e.childNodes[0].nodeType === 3 ? f.push(e.childNodes[0].nodeValue) : f.push("") : e && f.push(Vdb(a, e))
                }
            return c
        },
        Zdb = function(a) {
            var b = a.player.getVideoData();
            if (b.Wa) {
                var c = a.player.U().Na.get(b.videoId);
                if (c) {
                    var d = {
                        format: "XML",
                        urlParams: {},
                        method: "POST",
                        withCredentials: !0,
                        onFinish: function(e, f, h) {
                            e = a.loadNumber;
                            f = b.videoId;
                            a.loaded && a.loadNumber === e && a.player.getVideoData().videoId === f && (h = g.es(h) && h.responseXML ? h.responseXML : null) && Wdb(a, h)
                        }
                    };
                    g.Ut() && (d.onFinish = Xdb(a, d.onFinish));
                    d.postParams = {
                        ic_only: "1"
                    };
                    Ydb(d, c);
                    a.Z = !0;
                    g.ps(b.Wa, d)
                }
            }
        },
        Ydb = function(a, b) {
            a.method = "POST";
            a.postParams = a.postParams || {};
            b.WI && (a.postParams.ic_coll = b.WI);
            b.xO && (a.postParams.ic_xml = b.xO);
            b.FM && (a.postParams.ic_track = b.FM)
        },
        $db = function(a) {
            var b = new g.T({
                I: "div"
            });
            g.xm(b.element, !1);
            var c = new qdb(a.player, b.element, j3(a));
            g.Q(c, b);
            b.Ja(a.B.element);
            c.yH();
            return c
        },
        beb = function(a, b) {
            var c, d;
            if (b = (c = b.getWatchNextResponse()) == null ? void 0 : (d = c.cards) == null ? void 0 : d.cardCollectionRenderer) a.qa = !0, aeb(a, b), b.headerText && a.Yg && (c = g.uy(b.headerText), a.Yg.setAttribute("title", c))
        },
        j3 = function(a) {
            if (!a.Y) {
                var b = new Kcb(a);
                g.Q(a, b);
                var c = new g.vk(a);
                g.Q(a, c);
                a.Y = new Jdb(b, c, a.player.U(), a.player.getVideoData(), a.logger, a.player, a.Bj)
            }
            return a.Y
        },
        Wdb = function(a, b) {
            var c = !1,
                d = b.getElementsByTagName("annotations");
            if (d && !(d.length < 1) && (d = d[0].getAttribute("itct"))) {
                var e = g.Bx();
                if (e) {
                    var f = g.Ax();
                    f && g.Pr(g.Vx)(void 0, e, f, [g.yx(d)])
                }
            }
            b = b.getElementsByTagName("annotation");
            for (d = 0; d < b.length; d++) {
                f = Vdb(a, b[d]);
                e = null;
                try {
                    if (f) {
                        var h = f.id,
                            l = /.+/;
                        var m = typeof h === "string" && l != null && h != null && h.match(l) ? h : "";
                        var n = R2(f.type, ceb),
                            p = R2(f.style, deb),
                            q = $cb(f.data),
                            r = q.length !== 0 ? JSON.parse(q) : {};
                        var t = f.action;
                        f = fdb;
                        if (t == null) var u = null;
                        else if (g.Sa(t)) {
                            l = [];
                            for (var x = g.v(t), B = x.next(); !B.done; B = x.next()) {
                                var E = f(B.value);
                                E && l.push(E)
                            }
                            u = l
                        } else {
                            var F = f(t);
                            u = F ? [F] : []
                        }
                        e = m && n ? new gdb(m, n, p, u, r) : null
                    } else e = null
                } catch (la) {}
                if (e)
                    if (e.type === "branding" || e.type === "promotion") {
                        f = a;
                        l = e;
                        var I = Sdb(f),
                            O = null;
                        switch (l.type) {
                            case "branding":
                                if (f.player.U().Ed) break;
                                f.B.element.appendChild(I);
                                O = new h3(I, j3(f), l);
                                break;
                            case "promotion":
                                g.KS(f.player, I, 4), O = new Kdb(I, j3(f), l)
                        }
                        O && O.yH();
                        if (f = O) g.Q(a, f), a.K[e.id] = f
                    } else if (e.type === "card" || e.type === "drawer") {
                    a.j || (a.j = $db(a), g.Q(a, a.j));
                    if (e.type === "card") {
                        I = a.j;
                        var N = (c = e) && c.data &&
                            c.data.card_type;
                        e = c.data;
                        if (N) switch (f = e.tracking || {}, f = {
                            iZ: f.impression,
                            click: f.click,
                            close: f.close,
                            D2: f.teaser_impression,
                            AM: f.teaser_click
                        }, l = e.tracking_params || {}, O = null, N) {
                            case "collaborator":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    jj: f,
                                    Hp: l.card ? g.yx(l.card) : null,
                                    Qj: l.teaser ? g.yx(l.teaser) : null,
                                    Cf: l.icon ? g.yx(l.icon) : null,
                                    channelId: e.channel_id,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    profileImageUrl: e.image_url,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    url: T2({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                b3(I, c);
                                break;
                            case "playlist":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    jj: f,
                                    Hp: l.card ? g.yx(l.card) : null,
                                    Qj: l.teaser ? g.yx(l.teaser) : null,
                                    Cf: l.icon ? g.yx(l.icon) : null,
                                    OH: e.image_url,
                                    playlistVideoCount: e.playlist_video_count,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    url: T2({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                b3(I, c);
                                break;
                            case "productListing":
                                e.signin_url && (O = T2({
                                    target: "current",
                                    value: e.signin_url
                                }));
                                N = [];
                                for (var S = e.offers || [], Y = 0; Y < S.length; Y++) N.push(new mdb(g.Yd(S[Y].merchant),
                                    g.Yd(S[Y].price)));
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    jj: f,
                                    Hp: l.card ? g.yx(l.card) : null,
                                    Qj: l.teaser ? g.yx(l.teaser) : null,
                                    Cf: l.icon ? g.yx(l.icon) : null,
                                    imageUrl: e.image_url,
                                    displayDomain: e.display_domain ? e.display_domain : null,
                                    showLinkIcon: !!e.show_link_icon,
                                    kE: e.button_icon_url ? e.button_icon_url : null,
                                    title: e.title,
                                    customMessage: e.custom_message ?
                                        e.custom_message : null,
                                    url: T2({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    wpa: O,
                                    upa: e.signin_title ? e.signin_title : void 0,
                                    tpa: e.signin_message ? e.signin_message : void 0,
                                    offers: N,
                                    onClickCommand: null
                                };
                                b3(I, c);
                                break;
                            case "simple":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    jj: f,
                                    Hp: l.card ? g.yx(l.card) : null,
                                    Qj: l.teaser ? g.yx(l.teaser) : null,
                                    Cf: l.icon ? g.yx(l.icon) : null,
                                    imageUrl: e.image_url,
                                    displayDomain: e.display_domain ? e.display_domain : null,
                                    showLinkIcon: !!e.show_link_icon,
                                    kE: e.button_icon_url ? e.button_icon_url : null,
                                    title: e.title,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    url: T2({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                b3(I, c);
                                break;
                            case "video":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    jj: f,
                                    Hp: l.card ? g.yx(l.card) : null,
                                    Qj: l.teaser ? g.yx(l.teaser) : null,
                                    Cf: l.icon ? g.yx(l.icon) : null,
                                    OH: e.image_url,
                                    videoDuration: e.video_duration || null,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    isLiveNow: !!e.is_live_now,
                                    url: T2({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                }, b3(I, c)
                        }
                    } else rdb(a.j, e);
                    c = !0
                }
            }
            c &&
                (C2(a.player), a.qL())
        },
        aeb = function(a, b) {
            var c = !1;
            a.j || (a.j = $db(a), g.Q(a, a.j));
            for (var d = g.v(b.cards || []), e = d.next(); !e.done; e = d.next()) e = e.value, e.cardRenderer && (sdb(a.j, e.cardRenderer), c = !0);
            if (c) {
                var f;
                (f = a.player.getVideoData()) != null && g.IR(f) || (c = a.j, d = b.headerText ? g.uy(b.headerText) : "", g.ue(c.Jb, d), c.Z && c.Z.setAttribute("title", d), c.context.videoData.eventId && (c.eventId = c.context.videoData.eventId), c.Fa = b.trackingParams ? g.yx(b.trackingParams) : null, c.N = b.closeButton.infoCardIconRenderer.trackingParams ? g.yx(b.closeButton.infoCardIconRenderer.trackingParams) :
                    null, c.Cf = b.icon.infoCardIconRenderer.trackingParams ? g.yx(b.icon.infoCardIconRenderer.trackingParams) : null, a.qL());
                C2(a.player)
            }
        },
        eeb = function(a, b, c, d, e) {
            if (!a.player.U().Ed) {
                var f = [];
                b.navigationEndpoint && g.R(b.navigationEndpoint, g.BR) && g.R(b.navigationEndpoint, g.BR).browseId && f.push(new cdb("openUrl", "click", new adb("/channel/" + g.R(b.navigationEndpoint, g.BR).browseId, "new", !0, !0)));
                var h = b.watermark.thumbnails[0];
                d = {
                    channel_name: b.channelName,
                    end_ms: b.endTimeMs,
                    image_height: h.height,
                    image_type: 1,
                    image_url: h.url,
                    image_width: h.width,
                    is_mobile: !1,
                    session_data: {
                        annotation_id: c,
                        ei: e,
                        feature: "iv",
                        itct: b.trackingParams,
                        src_vid: d
                    },
                    start_ms: b.startTimeMs
                };
                if (b.subscribeButton && g.R(b.subscribeButton,
                        g.CR)) {
                    d.channel_id = g.R(b.subscribeButton, g.CR).channelId;
                    var l;
                    b = g.R(b.subscribeButton, g.CR);
                    h = e = null;
                    b.subscribed ? (b.subscriberCountWithUnsubscribeText && (e = g.uy(b.subscriberCountWithUnsubscribeText)), b.subscriberCountText && (h = g.uy(b.subscriberCountText))) : (b.subscriberCountText && (e = g.uy(b.subscriberCountText)), b.subscriberCountWithSubscribeText && (h = g.uy(b.subscriberCountWithSubscribeText)));
                    var m, n = ((m = g.R((l = b.signInEndpoint) == null ? void 0 : l.commandMetadata, g.y1)) == null ? void 0 : m.url) || "";
                    l = {
                        subscribeText: g.uy(b.unsubscribedButtonText),
                        subscribeCount: e || "",
                        unsubscribeText: g.uy(b.subscribedButtonText),
                        unsubscribeCount: h || "",
                        enabled: b.enabled || !1,
                        classic: !1,
                        subscribed: b.subscribed || !1,
                        feature: "iv",
                        signInUrl: n
                    };
                    d.standalone_subscribe_button_data = l
                }
                f = new gdb(c, "branding", "branding", f, d);
                l = Sdb(a);
                a.B.element.appendChild(l);
                f = new h3(l, j3(a), f);
                f.yH();
                g.Q(f, f);
                a.K[c] = f
            }
        },
        Xdb = function(a, b) {
            return function() {
                var c = g.Fa.apply(0, arguments);
                a.Ma() || a.ra.push(g.Wo.Si(function() {
                    b.apply(null, g.w(c))
                }))
            }
        },
        feb = function(a) {
            return a === "annotation-editor" || a === "live-dashboard"
        };
    g.jS.prototype.kC = g.da(31, function(a, b) {
        var c = g.HU(this.Ab());
        c && c.kC(a, b)
    });
    var E2 = {},
        F2 = null;
    g.ab(H2, g.sp);
    g.k = H2.prototype;
    g.k.getDuration = function() {
        return this.duration
    };
    g.k.play = function(a) {
        if (a || this.j == 0) this.progress = 0, this.coords = this.B;
        else if (this.isPlaying()) return !1;
        G2(this);
        this.startTime = a = g.$a();
        this.isPaused() && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.D = this.startTime;
        this.progress || this.iL();
        this.Nn("play");
        this.isPaused() && this.Nn("resume");
        this.j = 1;
        var b = g.Wa(this);
        b in E2 || (E2[b] = this);
        Dcb();
        Ecb(this, a);
        return !0
    };
    g.k.stop = function(a) {
        G2(this);
        this.j = 0;
        a && (this.progress = 1);
        Fcb(this, this.progress);
        this.onStop();
        this.As()
    };
    g.k.pause = function() {
        this.isPlaying() && (G2(this), this.j = -1, this.Nn("pause"))
    };
    g.k.xa = function() {
        this.j == 0 || this.stop(!1);
        this.Nn("destroy");
        H2.Of.xa.call(this)
    };
    g.k.destroy = function() {
        this.dispose()
    };
    g.k.FN = function() {
        this.Nn("animate")
    };
    g.k.Nn = function(a) {
        this.dispatchEvent(new Gcb(a, this))
    };
    g.ab(Gcb, g.lb);
    g.ab(I2, H2);
    I2.prototype.C = function() {};
    I2.prototype.FN = function() {
        this.C();
        I2.Of.FN.call(this)
    };
    I2.prototype.As = function() {
        this.C();
        I2.Of.As.call(this)
    };
    I2.prototype.iL = function() {
        this.C();
        I2.Of.iL.call(this)
    };
    g.ab(Hcb, I2);
    Hcb.prototype.C = function() {
        this.element.style.left = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    g.z(Kcb, g.K);
    g.k = Kcb.prototype;
    g.k.listen = function(a, b, c, d) {
        c = (0, g.Xa)(c, d || this.B);
        a = g.mt(a, b, c);
        this.j.push(a);
        return a
    };
    g.k.VF = function(a, b, c, d) {
        c = (0, g.Xa)(c, d || this.B);
        a = Bcb(a, b, c);
        this.j.push(a);
        return a
    };
    g.k.Nc = function(a) {
        g.nt(a);
        g.ub(this.j, a)
    };
    g.k.removeAll = function() {
        g.nt(this.j);
        this.j.length = 0
    };
    g.k.xa = function() {
        this.removeAll();
        g.K.prototype.xa.call(this)
    };
    g.z(Ncb, g.jU);
    g.k = Ncb.prototype;
    g.k.load = function() {
        g.jU.prototype.load.call(this);
        if (!L2(this)) {
            var a = g.HLa(this.player.getVideoData());
            a ? (a = Mcb(a, Ocb(this)), M2(this, a, !1)) : Pcb(this)
        }
    };
    g.k.unload = function() {
        M2(this, null);
        this.C && (this.C.abort(), this.C = null);
        g.jU.prototype.unload.call(this)
    };
    g.k.Sh = function(a, b) {
        return L2(this) ? a === "loadCustomEndscreenRenderer" ? (a = Mcb(b, "new"), M2(this, a), !0) : null : null
    };
    g.k.getOptions = function() {
        return L2(this) ? ["loadCustomEndscreenRenderer"] : []
    };
    g.k.jc = function() {
        if (this.endscreen && this.endscreen.elements) {
            var a = this.player.getVideoContentRect();
            if (a && a.width !== 0 && a.height !== 0) {
                var b = this.player.getPlayerSize();
                if (b && b.width !== 0 && b.height !== 0) {
                    var c = a.width / a.height;
                    var d = 0;
                    for (var e = -1, f = 0; f < geb.length; f++) {
                        var h = Math.abs(b.width - geb[f]);
                        if (e === -1 || d >= h) e = f, d = h
                    }
                    d = heb[e];
                    this.B && g.km(this.B.element, "outline-width", Math.max(b.width, b.height) + "px");
                    for (b = 0; b < this.endscreen.elements.length; ++b)
                        if (f = this.endscreen.elements[b].id, e = this.j[f],
                            h = this.G[f], e && h) {
                            var l = h.width * c / h.aspectRatio,
                                m = Math.round(h.width * a.width);
                            f = Math.round(l * a.height);
                            var n = a.left + Math.round(h.left * a.width),
                                p = a.top + Math.round(h.top * a.height);
                            g.vm(e.element, m, f);
                            g.rm(e.element, n, p);
                            g.qp(e.element, ieb);
                            m > 256 || f > 256 ? g.np(e.element, "ytp-ce-large-round") : m > 96 || f > 96 ? g.np(e.element, "ytp-ce-medium-round") : g.np(e.element, "ytp-ce-small-round");
                            g.qp(e.element, jeb);
                            m = h.left + h.width / 2;
                            h = h.top + l / 2;
                            g.np(e.element, m <= .5 && h <= .5 ? "ytp-ce-top-left-quad" : m > .5 && h <= .5 ? "ytp-ce-top-right-quad" :
                                m <= .5 && h > .5 ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
                            g.qp(e.element, heb);
                            g.np(e.element, d);
                            (e = g.fe(document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) && g.km(e, "height", f + "px")
                        }
                }
            }
        }
    };
    g.k.onCueRangeEnter = function(a) {
        if (this.endscreen)
            if (a.getId() === "ytp-ce-in-endscreen") Q2(this, this.endscreen.impressionUrls), (a = g.Bx()) && this.endscreen.visualElement && g.cy(a, this.endscreen.visualElement);
            else {
                a = a.getId().substring(15);
                var b = this.j[a],
                    c = this.G[a];
                g.np(b.element, "ytp-ce-element-show");
                b.element.removeAttribute("aria-hidden");
                b = this.player.getRootNode();
                g.np(b, "ytp-ce-shown");
                Q2(this, c.impressionUrls);
                (b = g.Bx()) && g.cy(b, c.visualElement);
                this.player.U().N && this.player.ib("endscreenelementshown",
                    a)
            }
    };
    g.k.onCueRangeExit = function(a) {
        if (a.getId() !== "ytp-ce-in-endscreen") {
            a = a.getId().substring(15);
            var b = this.j[a];
            g.pp(b.element, "ytp-ce-element-show");
            b.element.setAttribute("aria-hidden", "true");
            b = this.player.getRootNode();
            g.pp(b, "ytp-ce-shown");
            this.player.U().N && this.player.ib("endscreenelementhidden", a)
        }
    };
    g.k.sca = function(a) {
        var b = this;
        a.target === window && (new g.fp(function() {
            for (var c = g.v(Object.values(b.j)), d = c.next(); !d.done; d = c.next()) g.qp(d.value.element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"])
        }, 0)).start()
    };
    var geb = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
        heb = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "),
        jeb = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"],
        ieb = ["ytp-ce-small-round", "ytp-ce-medium-round", "ytp-ce-large-round"];
    var bdb = {
        Hga: "current",
        Fja: "new"
    };
    var ddb = {
            CLOSE: "close",
            Kja: "openUrl",
            SUBSCRIBE: "subscribe"
        },
        edb = {
            oga: "click",
            CLOSE: "close",
            Hha: "hidden",
            xka: "rollOut",
            yka: "rollOver",
            Ika: "shown"
        };
    gdb.prototype.Ee = function() {
        var a = hdb(this, function(b) {
            return b.type === "openUrl" && b.url != null
        });
        return a ? a.url : null
    };
    var deb = {
            zfa: "anchored",
            U3: "branding",
            CHANNEL: "channel",
            Gga: "cta",
            Kha: "highlightText",
            Uia: "label",
            PLAYLIST: "playlist",
            POPUP: "popup",
            Qka: "speech",
            SUBSCRIBE: "subscribe",
            ela: "title",
            VIDEO: "video",
            Nla: "website"
        },
        ceb = {
            U3: "branding",
            aga: "card",
            Sga: "drawer",
            Jha: "highlight",
            kja: "marker",
            gka: "promotion",
            TEXT: "text",
            qma: "widget"
        };
    g.z(X2, g.K);
    g.k = X2.prototype;
    g.k.addCueRange = function(a, b, c, d, e) {
        a = new g.gE(a, b, {
            id: c,
            namespace: "annotations_module"
        });
        d && this.Wa.set(a, d);
        e && this.bb.set(a, e);
        this.context.J.kf([a])
    };
    g.k.yH = function() {
        this.context.B.subscribe("resize", this.RI, this)
    };
    g.k.Ib = function() {
        return this.element
    };
    g.k.GN = function(a, b, c, d, e, f) {
        if (this.rb) return !1;
        f && (f.stopPropagation(), f.preventDefault());
        this.navigate(a, c, d, e);
        return !1
    };
    g.k.show = function() {};
    g.k.hide = function() {};
    g.k.destroy = function() {
        g.re(this.Ib())
    };
    g.k.RI = function() {};
    g.k.navigate = function(a, b, c, d) {
        var e = this,
            f = S2(a);
        if (f) {
            var h = odb(f, a.target),
                l = function() {
                    a.j && e.context.J.pauseVideo();
                    var m = e.context.videoData.Ff || !1,
                        n = g.Vr(f || "");
                    m && n && (n.v || n.list) ? e.context.J.mp(n.v, b, n.list, !1) : g.iA(f || "", h === "current" ? "_top" : void 0, b)
                };
            h === "new" && (l(), l = null);
            i3(this.context.logger, c, l, d);
            ndb(f) || (c = g.Bx(), d = b.itct, c && d && g.fy(c, g.yx(d)))
        }
    };
    g.k.xa = function() {
        this.Wa.clear();
        this.bb.clear();
        g.K.prototype.xa.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.T(a);
        g.Q(this, a);
        return a.element
    };
    g.z(qdb, X2);
    g.k = qdb.prototype;
    g.k.ju = function() {
        this.ra && b3(this, this.ra)
    };
    g.k.isAvailable = function() {
        var a;
        if (a = !!this.cards.length)(a = this.J.getRootNode()) ? (a = g.wm(a), a = 173 < a.width && 173 < a.height) : a = !1;
        return a
    };
    g.k.RI = function() {
        var a = this.isAvailable();
        g.xm(this.Ib(), a);
        g.rp(this.context.J.getRootNode(), g.CX.IV_DRAWER_ENABLED, a);
        C2(this.J)
    };
    g.k.destroy = function() {
        this.J.kC(!1);
        try {
            this.J.getRootNode().removeChild(this.D)
        } catch (a) {}
        g.dw(this.qa);
        g.ut(this.Ra);
        this.Va && this.Va.dispose();
        this.G && this.G.dispose();
        X2.prototype.destroy.call(this)
    };
    g.k.CI = function() {
        var a = this,
            b = g.he("iv-drawer-close-button", this.D);
        this.context.j.listen(b, "click", this.p7, this);
        this.context.j.listen(this.B, "touchend", function() {
            a.Ga.start()
        });
        this.context.j.listen(this.B, "scroll", this.M7, this);
        this.context.B.subscribe("onHideControls", function() {
            a.Na = !0
        });
        this.context.B.subscribe("onShowControls", function() {
            a.Na = !1
        });
        this.context.B.subscribe("onVideoAreaChange", function() {
            a.Na = g.mp(a.J.getRootNode(), "ytp-autohide")
        });
        this.qa.push(g.cw("iv-button-shown", this.i$, this));
        this.qa.push(g.cw("iv-button-hidden", this.h$, this));
        xdb(this)
    };
    g.k.findLastIndex = function(a) {
        if (this.cards.length === 0) return 0;
        var b = g.qb(this.cards, function(c) {
            return a.xf.startMs > c.xf.startMs || a.xf.startMs === c.xf.startMs && a.xf.timestamp >= c.xf.timestamp ? !0 : !1
        });
        return b === -1 ? 0 : b + 1
    };
    g.k.p7 = function() {
        if (this.C) {
            i3(this.context.logger, f3(this).jj.close);
            var a = g.Bx();
            a && this.N && g.fy(a, this.N);
            a3(this)
        }
    };
    g.k.M7 = function() {
        g.rp(this.D, "iv-drawer-scrolled", this.B.scrollTop > 0)
    };
    g.k.i$ = function() {
        var a = g.Bx(),
            b = f3(this);
        b = b ? b.Cf : this.Cf;
        a && b && g.dy(a, [b])
    };
    g.k.h$ = function() {
        var a = g.Bx(),
            b = f3(this);
        b = b ? b.Cf : this.Cf;
        a && b && g.ey(a, [b])
    };
    g.k.o6 = function() {
        var a = f3(this);
        i3(this.context.logger, a.jj.D2);
        var b = g.Bx();
        if (b && a)
            if (this.J.L("web_infocards_teaser_show_logging_fix")) {
                var c = [];
                a.Qj && c.push(a.Qj);
                a.Cf && c.push(a.Cf);
                c.length > 0 && g.dy(b, c)
            } else g.dy(b, [a.Qj, a.Cf])
    };
    g.k.j$ = function() {
        var a = g.Bx(),
            b = f3(this);
        a && b && g.ey(a, [b.Qj])
    };
    g.k.n6 = function(a) {
        var b = f3(this),
            c = g.Bx();
        this.j ? a ? (a = this.context.logger, i3(a, b.jj.AM), a.J.sendVideoStatsEngageEvent(4, void 0), c && b.Qj && g.fy(c, b.Qj)) : (a = this.context.logger, i3(a, b.jj.AM), a.J.sendVideoStatsEngageEvent(4, void 0), c && b.Cf && g.fy(c, b.Cf)) : (a = this.context.logger, i3(a, b.jj.AM), a.J.sendVideoStatsEngageEvent(4, void 0), c && this.Cf && g.fy(c, this.Cf))
    };
    g.z(g3, X2);
    g3.prototype.yH = function() {
        X2.prototype.yH.call(this);
        Edb(this)
    };
    g3.prototype.show = function() {
        X2.prototype.show.call(this);
        var a = g.Bx(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.dy(a, [g.yx(b.itct)])
    };
    g3.prototype.hide = function() {
        X2.prototype.hide.call(this);
        var a = g.Bx(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.ey(a, [g.yx(b.itct)])
    };
    g.z(h3, g3);
    h3.prototype.Dy = function() {
        g.np(this.Ib(), "iv-branding");
        var a = this.annotation.data;
        this.B = this.createElement({
            I: "img",
            La: ["branding-img", "iv-click-target"],
            W: {
                "aria-label": "Channel watermark",
                src: a.image_url,
                width: a.image_width,
                height: a.image_height
            }
        });
        g.xm(this.B, !1);
        var b = this.createElement({
            I: "button",
            La: ["branding-img-container", "ytp-button"]
        });
        b.appendChild(this.B);
        this.Ib().appendChild(b);
        var c = this.annotation.Ee();
        c && Y2(this, b, c, this.annotation.id, a.session_data);
        this.context.J.L("disable_branding_context") || Idb(this,
            a)
    };
    h3.prototype.show = function() {
        if (!this.isActive && (g3.prototype.show.call(this), this.N || (this.Dy(), this.N = !0), g.xm(this.Ib(), !0), this.isActive = !0, this.B)) {
            try {
                Fdb(this, this.B)
            } catch (a) {}
            g.np(this.context.J.getRootNode(), "ytp-branding-shown")
        }
    };
    h3.prototype.hide = function() {
        this.isActive && (g3.prototype.hide.call(this), g.xm(this.Ib(), !1), this.isActive = !1, g.pp(this.context.J.getRootNode(), "ytp-branding-shown"))
    };
    h3.prototype.destroy = function() {
        this.j && (this.j.dispose(), this.j = null);
        g3.prototype.destroy.call(this)
    };
    g.z(Kdb, g3);
    g.k = Kdb.prototype;
    g.k.Dy = function() {
        var a = this,
            b = this.annotation.data;
        if (this.annotation.style === "cta") var c = 6;
        else if (this.annotation.style === "video" || this.annotation.style === "playlist") c = 7;
        this.K = b.collapsedelay_ms || this.K;
        var d = ["iv-promo", "iv-promo-inactive"];
        this.Ib().setAttribute("aria-hidden", "true");
        this.Ib().setAttribute("aria-label", "Promotion");
        this.Ib().tabIndex = 0;
        var e = this.annotation.Ee(),
            f = b.image_url;
        if (f) {
            var h = this.createElement({
                I: "div",
                La: ["iv-promo-img", "iv-click-target"]
            });
            f = this.createElement({
                I: "img",
                W: {
                    src: f,
                    "aria-hidden": "true"
                }
            });
            h.appendChild(f);
            b.video_duration && !b.is_live ? (f = this.createElement({
                I: "span",
                S: "iv-promo-video-duration",
                va: b.video_duration
            }), h.appendChild(f)) : b.playlist_length && (f = this.createElement({
                I: "span",
                S: "iv-promo-playlist-length",
                va: b.playlist_length.toString()
            }), h.appendChild(f));
            e && Y2(this, h, e, this.annotation.id, b.session_data, void 0, c)
        }
        e ? (f = this.createElement({
            I: "a",
            S: "iv-promo-txt"
        }), g.Od(f, S2(e)), this.j = f) : this.j = this.createElement({
            I: "div",
            S: "iv-promo-txt"
        });
        switch (this.annotation.style) {
            case "cta":
            case "website":
                var l =
                    this.createElement({
                        I: "p",
                        V: [{
                            I: "strong",
                            va: b.text_line_1
                        }]
                    });
                var m = this.createElement({
                    I: "p",
                    V: [{
                        I: "span",
                        S: "iv-promo-link",
                        va: b.text_line_2
                    }]
                });
                if (f = b.text_line_3) {
                    d.push("iv-promo-website-card-cta-redesign");
                    var n = this.createElement({
                        I: "button",
                        La: ["iv-promo-round-expand-icon", "ytp-button"]
                    });
                    f = this.createElement({
                        I: "button",
                        La: ["iv-button", "iv-promo-button"],
                        V: [{
                            I: "span",
                            S: "iv-button-content",
                            va: f
                        }]
                    });
                    var p = this.createElement({
                        I: "div",
                        S: "iv-promo-button-container"
                    });
                    p.appendChild(f);
                    e && Y2(this,
                        this.Ib(), e, this.annotation.id, b.session_data, void 0, c)
                }
                g.np(this.j, "iv-click-target");
                e && Y2(this, this.j, e, this.annotation.id, b.session_data, void 0, c);
                break;
            case "playlist":
            case "video":
                l = this.createElement({
                    I: "p",
                    V: [{
                        I: "span",
                        va: b.text_line_1
                    }]
                }), m = this.createElement({
                    I: "p",
                    V: [{
                        I: "strong",
                        va: b.text_line_2
                    }]
                }), b.is_live && (l = m, m = this.createElement({
                    I: "span",
                    La: ["yt-badge", "iv-promo-badge-live"],
                    va: "LIVE NOW"
                })), g.np(this.j, "iv-click-target"), e && Y2(this, this.j, e, this.annotation.id, b.session_data, void 0,
                    c), d.push("iv-promo-video")
        }
        l && this.j.appendChild(l);
        m && this.j.appendChild(m);
        this.N.appendChild(this.j);
        p && this.N.appendChild(p);
        c = this.createElement({
            I: "div",
            S: "iv-promo-actions"
        });
        this.B = this.createElement({
            I: "button",
            La: ["iv-promo-expand", "ytp-button"]
        });
        this.B.title = "Expand";
        this.context.j.listen(this.B, "click", function(q) {
            Ndb(a, 5E3, q)
        });
        c.appendChild(this.B);
        g.xm(this.B, !1);
        this.context.j.listen(this.Ib(), "mouseover", this.h9, this);
        this.context.j.listen(this.Ib(), "mouseout", this.g9, this);
        this.context.j.listen(this.Ib(), "touchend", function(q) {
            Ndb(a, 5E3, q)
        });
        this.C = this.createElement({
            I: "button",
            La: ["iv-promo-close", "ytp-button"]
        });
        this.C.title = "Close";
        this.context.j.listen(this.C, "click", this.annotation.style === "cta" && b.text_line_3 ? this.c9 : this.b9, this);
        c.appendChild(this.C);
        g.op(this.Ib(), d);
        h && (g.oe(this.Ib(), h), n && h.appendChild(n));
        g.oe(this.Ib(), this.N);
        g.oe(this.Ib(), c)
    };
    g.k.show = function() {
        this.isActive || (g3.prototype.show.call(this), this.Y || (this.Dy(), this.Y = !0), g.xm(this.Ib(), !0), g.Re(function() {
            g.pp(this.Ib(), "iv-promo-inactive")
        }, 100, this), this.Ib().removeAttribute("aria-hidden"), this.isActive = !0, Pdb(this), Ldb(this), Mdb(this, this.K))
    };
    g.k.hide = function() {
        this.isActive && (g.np(this.Ib(), "iv-promo-inactive"), this.isActive = !1, this.Ib().setAttribute("aria-hidden", "true"))
    };
    g.k.GN = function(a, b, c, d, e, f) {
        return this.isCollapsed ? !1 : g3.prototype.GN.call(this, a, b, c, d, e, f)
    };
    g.k.h9 = function(a) {
        this.Z = !0;
        Ndb(this, 500, a)
    };
    g.k.g9 = function() {
        this.Z = !1;
        Odb(this)
    };
    g.k.b9 = function(a) {
        a.stopPropagation();
        this.hide()
    };
    g.k.c9 = function(a) {
        a.stopPropagation();
        Pdb(this);
        this.isCollapsed = !0;
        g.np(this.Ib(), "iv-promo-collapsed-no-delay");
        this.G.start()
    };
    g.k.destroy = function() {
        this.G.dispose();
        g3.prototype.destroy.call(this)
    };
    g.z(Rdb, g.jU);
    g.k = Rdb.prototype;
    g.k.Sh = function(a, b) {
        if (!feb(this.player.U().playerStyle)) return null;
        switch (a) {
            case "loadCustomAnnotationsXml":
                return (a = g.c1(b)) && Wdb(this, a), !0;
            case "removeCustomAnnotationById":
                return b && this.j && (udb(this.j, b), C2(this.player)), !0
        }
        return null
    };
    g.k.getOptions = function() {
        return feb(this.player.U().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : []
    };
    g.k.uv = function() {
        var a = this.player.U(),
            b = this.player.getVideoData(),
            c = a.annotationsLoadPolicy || b.annotationsLoadPolicy;
        return g.SR(b) || g.cS(this.player.app) ? !1 : c === 1 && !b.eZ || a.Na.get(b.videoId) || g.JR(b) || g.ILa(b) ? !0 : !1
    };
    g.k.qL = function() {
        if (this.C) {
            var a = this.player.qb().getVideoContentRect(!0);
            g.vm(this.C.element, a.width, a.height);
            g.rm(this.C.element, a.left, a.top)
        }
        if (this.j) {
            var b = this.player.Xn();
            a = this.j;
            b = b.width;
            g.rp(a.D, "iv-drawer-small", b <= 426);
            g.rp(a.D, "iv-drawer-big", b >= 1280)
        }
    };
    g.k.p6 = function(a) {
        Tdb(this, a.state);
        g.U(a.state, 2) && (this.bl() && this.Ep() && this.player.getPresentingPlayerType() !== 2 && this.lC(!1), this.kC(!1))
    };
    g.k.load = function() {
        function a(h) {
            var l = b.loadNumber;
            b.G = null;
            b.loaded && b.loadNumber === l && b.player.getVideoData().videoId === d && (h = g.es(h) && h.responseXML ? h.responseXML : null) && (Wdb(b, h), g.np(b.player.getRootNode(), "iv-module-loaded"))
        }
        var b = this;
        g.jU.prototype.load.call(this);
        Tdb(this, this.player.getPlayerStateObject());
        this.loadNumber++;
        var c = this.player.getVideoData(),
            d = c.videoId;
        g.Ut() && (a = Xdb(this, a));
        var e = {
            format: "XML",
            onFinish: a,
            onError: function() {
                b.G = null
            },
            urlParams: {}
        };
        c.isPharma && (e.urlParams.pharma = "1");
        e.method = "POST";
        e.withCredentials = !0;
        var f = this.player.U().Na.get(d);
        f && Ydb(e, f);
        f = f && (f.xO || f.WI);
        if (!c.Rv || f) c.Wa ? Udb(this, c.Wa, e) : (this.N = function() {
            if (!b.Z) b.onVideoDataChange(e);
            var h = b.player.getVideoData();
            (h == null ? 0 : g.IR(h)) && !b.qa && beb(b, h)
        }, this.player.addEventListener("videodatachange", this.N));
        g.KS(this.player, this.C.element, 4);
        this.qL();
        (f = g.JR(c)) && aeb(this, f);
        (f = g.ILa(c)) && f.featuredChannel && eeb(this, f.featuredChannel, f.annotationId || "branding", c.videoId || null, c.eventId || null);
        this.Yg = g.he("ytp-cards-button", this.player.getRootNode());
        g.IR(c) && beb(this, c)
    };
    g.k.onVideoDataChange = function(a) {
        var b = this.player.getVideoData();
        b.Wa && Udb(this, b.Wa, a)
    };
    g.k.unload = function() {
        this.player.qf("annotations_module");
        for (var a = g.v(Object.keys(this.K)), b = a.next(); !b.done; b = a.next()) this.K[b.value].destroy();
        this.Y = null;
        this.j && (this.j.destroy(), this.j = null, C2(this.player));
        this.Z = !1;
        this.G && (this.G.abort(), this.G = null);
        this.qa = !1;
        this.K = {};
        this.B.hide();
        g.jU.prototype.unload.call(this);
        this.C.detach();
        this.N && (this.player.removeEventListener("videodatachange", this.N), this.N = null)
    };
    g.k.x0 = function(a) {
        a === this.player.getVideoData().videoId && (this.loaded ? Zdb(this) : this.load())
    };
    g.k.bl = function() {
        var a;
        return ((a = this.j) == null ? void 0 : a.isAvailable()) || this.qa
    };
    g.k.Ep = function() {
        return !!this.j && this.j.C
    };
    g.k.lC = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        this.bl();
        this.j && (a ? c ? $2(this.j, c, b) : $2(this.j, "YOUTUBE_DRAWER_AUTO_OPEN", b) : a3(this.j))
    };
    g.k.kC = function(a, b) {
        this.player.publish(a ? "cardsteasershow" : "cardsteaserhide", b)
    };
    g.k.xa = function() {
        this.player.U().Na.unsubscribe("vast_info_card_add", this.x0, this);
        g.pp(this.player.getRootNode(), g.CX.IV_DRAWER_OPEN);
        for (var a = this.ra, b = g.Wo, c = 0, d = a.length; c < d; c++) b.bk(a[c]);
        this.ra.length = 0;
        g.jU.prototype.xa.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.T(a);
        g.Q(this, a);
        return a.element
    };
    g.iU("annotations_module", Rdb);
    g.iU("creatorendscreen", Ncb);
})(_yt_player);