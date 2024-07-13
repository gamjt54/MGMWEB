(function(g) {
    var window = this;
    'use strict';
    var bjb = function(a, b) {
            a.ib("onAutonavCoundownStarted", b)
        },
        j5 = function(a, b, c) {
            g.rp(a.element, "ytp-suggestion-set", !!b.videoId);
            var d = b.playlistId;
            c = b.gh(c ? c : "mqdefault.jpg");
            var e = null,
                f = null;
            b instanceof g.zQ && (b.lengthText ? (e = b.lengthText || null, f = b.Hx || null) : b.lengthSeconds && (e = g.Cz(b.lengthSeconds), f = g.Cz(b.lengthSeconds, !0)));
            var h = !!d;
            d = h && g.xQ(d).type === "RD";
            var l = b instanceof g.zQ ? b.isLivePlayback : null,
                m = b instanceof g.zQ ? b.isUpcoming : null,
                n = b.author,
                p = b.shortViewCount,
                q = b.publishedTimeText,
                r = [],
                t = [];
            n && r.push(n);
            p && (r.push(p), t.push(p));
            q && t.push(q);
            c = {
                title: b.title,
                author: n,
                author_and_views: r.join(" \u2022 "),
                aria_label: b.ariaLabel ||
                    g.tE("Watch $TITLE", {
                        TITLE: b.title
                    }),
                duration: e,
                timestamp: f,
                url: b.xl(),
                is_live: l,
                is_upcoming: m,
                is_list: h,
                is_mix: d,
                background: c ? "background-image: url(" + c + ")" : "",
                views_and_publish_time: t.join(" \u2022 "),
                autoplayAlternativeHeader: b.Bt
            };
            b instanceof g.yQ && (c.playlist_length = b.playlistLength);
            a.update(c)
        },
        k5 = function(a) {
            var b = a.U(),
                c = b.D;
            g.T.call(this, {
                I: "a",
                S: "ytp-autonav-suggestion-card",
                W: {
                    href: "{{url}}",
                    target: c ? b.Y : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                V: [{
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
                    W: {
                        style: "{{background}}"
                    },
                    V: [{
                        I: "div",
                        W: {
                            "aria-label": "{{timestamp}}"
                        },
                        La: ["ytp-autonav-timestamp"],
                        va: "{{duration}}"
                    }, {
                        I: "div",
                        La: ["ytp-autonav-live-stamp"],
                        va: "Live"
                    }, {
                        I: "div",
                        La: ["ytp-autonav-upcoming-stamp"],
                        va: "Upcoming"
                    }, {
                        I: "div",
                        S: "ytp-autonav-list-overlay",
                        V: [{
                            I: "div",
                            S: "ytp-autonav-mix-text",
                            va: "Mix"
                        }, {
                            I: "div",
                            S: "ytp-autonav-mix-icon"
                        }]
                    }]
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
                    va: "{{title}}"
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
                    va: "{{author}}"
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
                    va: "{{views_and_publish_time}}"
                }]
            });
            this.J = a;
            this.suggestion =
                null;
            this.j = c;
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress)
        },
        l5 = function(a, b) {
            b = b === void 0 ? !1 : b;
            g.T.call(this, {
                I: "div",
                S: "ytp-autonav-endscreen-countdown-overlay"
            });
            var c = this;
            this.K = b;
            this.cancelCommand = this.G = void 0;
            this.C = 0;
            this.container = new g.T({
                I: "div",
                S: "ytp-autonav-endscreen-countdown-container"
            });
            g.Q(this, this.container);
            this.container.Ja(this.element);
            b = a.U();
            var d = b.D;
            this.J = a;
            this.suggestion = null;
            this.onVideoDataChange("newdata", this.J.getVideoData());
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.j = new g.T({
                I: "div",
                S: "ytp-autonav-endscreen-upnext-container",
                W: {
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-header"
                }, {
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-alternative-header",
                    va: "{{autoplayAlternativeHeader}}"
                }, {
                    I: "a",
                    S: "ytp-autonav-endscreen-link-container",
                    W: {
                        href: "{{url}}",
                        target: d ? b.Y : ""
                    },
                    V: [{
                        I: "div",
                        S: "ytp-autonav-endscreen-upnext-thumbnail",
                        W: {
                            style: "{{background}}"
                        },
                        V: [{
                            I: "div",
                            W: {
                                "aria-label": "{{timestamp}}"
                            },
                            La: ["ytp-autonav-timestamp"],
                            va: "{{duration}}"
                        }, {
                            I: "div",
                            La: ["ytp-autonav-live-stamp"],
                            va: "Live"
                        }, {
                            I: "div",
                            La: ["ytp-autonav-upcoming-stamp"],
                            va: "Upcoming"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-autonav-endscreen-video-info",
                        V: [{
                            I: "div",
                            S: "ytp-autonav-endscreen-premium-badge"
                        }, {
                            I: "div",
                            S: "ytp-autonav-endscreen-upnext-title",
                            va: "{{title}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-endscreen-upnext-author",
                            va: "{{author}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-view-and-date",
                            va: "{{views_and_publish_time}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-author-and-view",
                            va: "{{author_and_views}}"
                        }]
                    }]
                }]
            });
            g.Q(this, this.j);
            this.j.Ja(this.container.element);
            d || this.T(this.j.Ea("ytp-autonav-endscreen-link-container"), "click", this.LU);
            this.J.createClientVe(this.container.element, this, 115127);
            this.J.createClientVe(this.j.Ea("ytp-autonav-endscreen-link-container"), this, 115128);
            this.overlay = new g.T({
                I: "div",
                S: "ytp-autonav-overlay"
            });
            g.Q(this, this.overlay);
            this.overlay.Ja(this.container.element);
            this.B = new g.T({
                I: "div",
                S: "ytp-autonav-endscreen-button-container"
            });
            g.Q(this, this.B);
            this.B.Ja(this.container.element);
            this.cancelButton = new g.T({
                I: "button",
                La: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                W: {
                    "aria-label": "Cancel autoplay"
                },
                va: "Cancel"
            });
            g.Q(this, this.cancelButton);
            this.cancelButton.Ja(this.B.element);
            this.cancelButton.listen("click", this.u4, this);
            this.J.createClientVe(this.cancelButton.element, this, 115129);
            this.playButton = new g.T({
                I: "a",
                La: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button",
                    b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""
                ],
                W: {
                    href: "{{url}}",
                    role: "button",
                    "aria-label": "Play next video"
                },
                va: "Play Now"
            });
            g.Q(this, this.playButton);
            this.playButton.Ja(this.B.element);
            this.playButton.listen("click", this.LU, this);
            this.J.L("web_player_autonav_next_button_renderer") ? (this.J.createServerVe(this.playButton.element, this.playButton, !0), (b = this.J.getVideoData()) && cjb(this, b)) : this.J.createClientVe(this.playButton.element, this, 115130);
            this.D = new g.fp(function() {
                    djb(c)
                },
                500);
            g.Q(this, this.D);
            this.KU();
            this.T(a, "autonavvisibility", this.KU);
            this.J.L("web_autonav_color_transition") && (this.T(a, "autonavchange", this.t4), this.T(a, "onAutonavCoundownStarted", this.Y$))
        },
        m5 = function(a) {
            var b = a.J.Xn(!0, a.J.isFullscreen());
            g.rp(a.container.element, "ytp-autonav-endscreen-small-mode", a.Pg(b));
            g.rp(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.uM);
            g.rp(a.J.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.J.Df());
            g.rp(a.J.getRootNode(), "countdown-running", a.Bl());
            g.rp(a.container.element, "ytp-player-content", a.J.Df());
            g.km(a.overlay.element, {
                width: b.width + "px"
            });
            if (!a.Bl()) {
                a.J.Df() ? ejb(a, Math.round(fjb(a) / 1E3)) : ejb(a);
                b = !!a.suggestion && !!a.suggestion.Bt;
                var c = a.J.Df() || !b;
                g.rp(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !c && b);
                g.rp(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", c && !b);
                g.py(a.B, a.J.Df());
                g.rp(a.element, "ytp-enable-w2w-color-transitions", gjb(a))
            }
        },
        djb = function(a) {
            var b = fjb(a),
                c = Math,
                d = c.min;
            var e = a.C ? Date.now() - a.C : 0;
            c = d.call(c, e, b);
            ejb(a, Math.ceil((b - c) / 1E3));
            b - c <= 500 && a.Bl() ? a.select(!0) : a.Bl() && a.D.start()
        },
        fjb = function(a) {
            if (a.J.isFullscreen()) {
                var b;
                a = (b = a.J.getVideoData()) == null ? void 0 : b.BD;
                return a === -1 || a === void 0 ? 8E3 : a
            }
            return a.J.Tt() >= 0 ? a.J.Tt() : g.qD(a.J.U().experiments, "autoplay_time") || 1E4
        },
        cjb = function(a, b) {
            a.J.L("web_player_autonav_next_button_renderer");
            b = b.afa;
            a.G = b == null ? void 0 : b.navigationEndpoint;
            b = b == null ? void 0 : b.trackingParams;
            a.playButton && b && a.J.setTrackingParams(a.playButton.element, b)
        },
        gjb = function(a) {
            var b;
            return !((b = a.J.getVideoData()) == null || !b.watchToWatchTransitionRenderer)
        },
        ejb = function(a, b) {
            b = b === void 0 ? -1 : b;
            a = a.j.Ea("ytp-autonav-endscreen-upnext-header");
            g.pe(a);
            if (b >= 0) {
                b = String(b);
                var c = "Up next in $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
                    d = "Up next in $SECONDS".indexOf(c);
                if (d >= 0) {
                    a.appendChild(g.ne("Up next in $SECONDS".slice(0, d)));
                    var e = g.me("span");
                    g.lp(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
                    g.ue(e, b);
                    a.appendChild(e);
                    a.appendChild(g.ne("Up next in $SECONDS".slice(d + c.length)));
                    return
                }
            }
            g.ue(a, "Up next")
        },
        n5 = function(a, b) {
            g.T.call(this, {
                I: "div",
                La: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
            });
            this.created = !1;
            this.player = a
        },
        o5 = function(a) {
            g.T.call(this, {
                I: "div",
                La: ["ytp-upnext", "ytp-player-content"],
                W: {
                    "aria-label": "{{aria_label}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-cued-thumbnail-overlay-image",
                    W: {
                        style: "{{background}}"
                    }
                }, {
                    I: "span",
                    S: "ytp-upnext-top",
                    V: [{
                        I: "span",
                        S: "ytp-upnext-header",
                        va: "Up Next"
                    }, {
                        I: "span",
                        S: "ytp-upnext-title",
                        va: "{{title}}"
                    }, {
                        I: "span",
                        S: "ytp-upnext-author",
                        va: "{{author}}"
                    }]
                }, {
                    I: "a",
                    S: "ytp-upnext-autoplay-icon",
                    W: {
                        role: "button",
                        href: "{{url}}",
                        "aria-label": "Play next video"
                    },
                    V: [{
                        I: "svg",
                        W: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        V: [{
                            I: "circle",
                            S: "ytp-svg-autoplay-circle",
                            W: {
                                cx: "36",
                                cy: "36",
                                fill: "#fff",
                                "fill-opacity": "0.3",
                                r: "31.5"
                            }
                        }, {
                            I: "circle",
                            S: "ytp-svg-autoplay-ring",
                            W: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            I: "path",
                            S: "ytp-svg-fill",
                            W: {
                                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
                            }
                        }]
                    }]
                }, {
                    I: "span",
                    S: "ytp-upnext-bottom",
                    V: [{
                        I: "span",
                        S: "ytp-upnext-cancel"
                    }, {
                        I: "span",
                        S: "ytp-upnext-paused",
                        va: "Autoplay is paused"
                    }]
                }]
            });
            this.api = a;
            this.cancelButton = null;
            this.G = this.Ea("ytp-svg-autoplay-ring");
            this.C = this.notification = this.j = this.suggestion = null;
            this.D = new g.fp(this.bJ, 5E3, this);
            this.B = 0;
            var b = this.Ea("ytp-upnext-cancel");
            this.cancelButton = new g.T({
                I: "button",
                La: ["ytp-upnext-cancel-button", "ytp-button"],
                W: {
                    tabindex: "0",
                    "aria-label": "Cancel autoplay"
                },
                va: "Cancel"
            });
            g.Q(this, this.cancelButton);
            this.cancelButton.listen("click", this.v4, this);
            this.cancelButton.Ja(b);
            this.cancelButton && this.api.createClientVe(this.cancelButton.element,
                this, 115129);
            g.Q(this, this.D);
            this.api.createClientVe(this.element, this, 18788);
            b = this.Ea("ytp-upnext-autoplay-icon");
            this.T(b, "click", this.w4);
            this.api.createClientVe(b, this, 115130);
            this.MU();
            this.T(a, "autonavvisibility", this.MU);
            this.T(a, "mdxnowautoplaying", this.Maa);
            this.T(a, "mdxautoplaycanceled", this.Naa);
            g.rp(this.element, "ytp-upnext-mobile", this.api.U().B)
        },
        hjb = function(a, b) {
            if (b) return b;
            if (a.api.isFullscreen()) {
                var c;
                a = (c = a.api.getVideoData()) == null ? void 0 : c.BD;
                return a === -1 || a === void 0 ? 8E3 : a
            }
            return a.api.Tt() >= 0 ? a.api.Tt() : g.qD(a.api.U().experiments, "autoplay_time") || 1E4
        },
        ijb = function(a, b) {
            b = hjb(a, b);
            var c = Math,
                d = c.min;
            var e = (0, g.uu)() - a.B;
            c = d.call(c, e, b);
            b = b === 0 ? 1 : Math.min(c / b, 1);
            a.G.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
            b >= 1 && a.Bl() && a.api.getPresentingPlayerType() !== 3 ? a.select(!0) : a.Bl() && a.j.start()
        },
        p5 = function(a) {
            n5.call(this, a, "autonav-endscreen");
            this.overlay = this.videoData = null;
            this.table = new g.T({
                I: "div",
                S: "ytp-suggestion-panel",
                V: [{
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
                    va: "More videos"
                }]
            });
            this.N = new g.T({
                I: "div",
                S: "ytp-suggestions-container"
            });
            this.videos = [];
            this.C = null;
            this.G = this.K = !1;
            this.B = new l5(this.player);
            g.Q(this, this.B);
            this.B.Ja(this.element);
            a.getVideoData().Tf ? this.j = this.B : (this.j = new o5(a), g.KS(this.player, this.j.element, 4), g.Q(this, this.j));
            this.overlay = new g.T({
                I: "div",
                S: "ytp-autonav-overlay-cancelled-state"
            });
            g.Q(this, this.overlay);
            this.overlay.Ja(this.element);
            this.D = new g.EF(this);
            g.Q(this, this.D);
            g.Q(this, this.table);
            this.table.Ja(this.element);
            this.table.show();
            g.Q(this, this.N);
            this.N.Ja(this.table.element);
            this.hide()
        },
        q5 = function(a) {
            var b = a.Df();
            b !== a.G && (a.G = b, a.player.publish("autonavvisibility"), a.G ? (a.B !== a.j && a.B.hide(), a.table.hide()) : (a.B !== a.j && a.B.show(), a.table.show()))
        },
        r5 = function(a, b) {
            g.T.call(this, {
                I: "button",
                La: ["ytp-watch-on-youtube-button", "ytp-button"],
                va: "{{content}}"
            });
            this.J = a;
            this.buttonType = this.buttonType = b;
            this.V1();
            this.buttonType === 2 && g.np(this.element, "ytp-continue-watching-button");
            this.listen("click", this.onClick);
            this.listen("videodatachange", this.V1);
            g.py(this, !0)
        },
        s5 = function(a, b) {
            n5.call(this, a, "embeds-lite-endscreen");
            this.J = a;
            this.Ne = b;
            this.J.createClientVe(this.element, this, 156943);
            this.watchButton = new r5(a, 2);
            g.Q(this, this.watchButton);
            this.watchButton.Ja(this.element);
            this.hide()
        },
        jjb = function(a) {
            n5.call(this, a, "subscribecard-endscreen");
            this.j = new g.T({
                I: "div",
                S: "ytp-subscribe-card",
                V: [{
                    I: "img",
                    S: "ytp-author-image",
                    W: {
                        src: "{{profilePicture}}"
                    }
                }, {
                    I: "div",
                    S: "ytp-subscribe-card-right",
                    V: [{
                        I: "div",
                        S: "ytp-author-name",
                        va: "{{author}}"
                    }, {
                        I: "div",
                        S: "html5-subscribe-button-container"
                    }]
                }]
            });
            g.Q(this, this.j);
            this.j.Ja(this.element);
            var b = a.getVideoData();
            this.subscribeButton = new g.ZU("Subscribe", null, "Unsubscribe", null, !0, !1, b.Rl, b.subscribed, "trailer-endscreen", null, a, !1);
            g.Q(this, this.subscribeButton);
            this.subscribeButton.Ja(this.j.Ea("html5-subscribe-button-container"));
            this.T(a, "videodatachange", this.Ta);
            this.Ta();
            this.hide()
        },
        t5 = function(a) {
            var b = a.U(),
                c = g.AF || g.CP ? {
                    style: "will-change: opacity"
                } : void 0,
                d = b.D,
                e = ["ytp-videowall-still"];
            b.B && e.push("ytp-videowall-show-text");
            g.T.call(this, {
                I: "a",
                La: e,
                W: {
                    href: "{{url}}",
                    target: d ? b.Y : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-videowall-still-image",
                    W: {
                        style: "{{background}}"
                    }
                }, {
                    I: "span",
                    S: "ytp-videowall-still-info",
                    W: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-info-bg",
                        V: [{
                            I: "span",
                            S: "ytp-videowall-still-info-content",
                            W: c,
                            V: [{
                                    I: "span",
                                    S: "ytp-videowall-still-info-title",
                                    va: "{{title}}"
                                },
                                {
                                    I: "span",
                                    S: "ytp-videowall-still-info-author",
                                    va: "{{author_and_views}}"
                                }, {
                                    I: "span",
                                    S: "ytp-videowall-still-info-live",
                                    va: "Live"
                                }, {
                                    I: "span",
                                    S: "ytp-videowall-still-info-duration",
                                    va: "{{duration}}"
                                }
                            ]
                        }]
                    }]
                }, {
                    I: "span",
                    La: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                    W: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-listlabel-icon"
                    }, "Playlist", {
                        I: "span",
                        S: "ytp-videowall-still-listlabel-length",
                        V: [" (", {
                            I: "span",
                            va: "{{playlist_length}}"
                        }, ")"]
                    }]
                }, {
                    I: "span",
                    La: ["ytp-videowall-still-listlabel-mix",
                        "ytp-videowall-still-listlabel"
                    ],
                    W: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-listlabel-mix-icon"
                    }, "Mix", {
                        I: "span",
                        S: "ytp-videowall-still-listlabel-length",
                        va: " (50+)"
                    }]
                }]
            });
            this.suggestion = null;
            this.B = d;
            this.api = a;
            this.j = new g.EF(this);
            g.Q(this, this.j);
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress);
            this.j.T(a, "videodatachange", this.onVideoDataChange);
            a.createServerVe(this.element, this);
            this.onVideoDataChange()
        },
        u5 = function(a) {
            n5.call(this, a, "videowall-endscreen");
            var b = this;
            this.J = a;
            this.C = 0;
            this.stills = [];
            this.D = this.videoData = null;
            this.G = this.N = !1;
            this.Y = null;
            this.B = new g.EF(this);
            g.Q(this, this.B);
            this.K = new g.fp(function() {
                g.np(b.element, "ytp-show-tiles")
            }, 0);
            g.Q(this, this.K);
            var c = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-endscreen-previous"],
                W: {
                    "aria-label": "Previous"
                },
                V: [g.yy()]
            });
            g.Q(this, c);
            c.Ja(this.element);
            c.listen("click", this.A4, this);
            this.table = new g.my({
                I: "div",
                S: "ytp-endscreen-content"
            });
            g.Q(this, this.table);
            this.table.Ja(this.element);
            c = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-endscreen-next"],
                W: {
                    "aria-label": "Next"
                },
                V: [g.zy()]
            });
            g.Q(this, c);
            c.Ja(this.element);
            c.listen("click", this.z4, this);
            a.getVideoData().Tf ? this.j = new l5(a, !0) : this.j =
                new o5(a);
            g.Q(this, this.j);
            g.KS(this.player, this.j.element, 4);
            a.createClientVe(this.element, this, 158789);
            this.hide()
        },
        v5 = function(a) {
            return g.LS(a.player) && a.gE() && !a.D
        },
        w5 = function(a) {
            var b = a.Df();
            b !== a.N && (a.N = b, a.player.publish("autonavvisibility"))
        },
        x5 = function(a) {
            n5.call(this, a, "watch-again-on-youtube-endscreen");
            this.watchButton = new r5(a, 1);
            g.Q(this, this.watchButton);
            this.watchButton.Ja(this.element);
            g.a9a(a) && (this.j = new g.e1(a), g.Q(this, this.j), this.B = new g.T({
                I: "div",
                La: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
                W: {
                    tabIndex: "-1"
                },
                V: [this.j]
            }), g.Q(this, this.B), this.j.Ja(this.B.element), this.B.Ja(this.element));
            a.createClientVe(this.element, this, 156914);
            this.hide()
        },
        njb = function(a) {
            g.jU.call(this, a);
            var b = this;
            this.endScreen = null;
            this.B = this.j = this.C = this.D = !1;
            this.listeners = new g.EF(this);
            g.Q(this, this.listeners);
            var c = a.U(),
                d = a.getVideoData();
            d = d && d.limitedPlaybackDurationInSeconds !== 0;
            g.at(g.NP(c)) && d && !g.HS(a) ? (this.B = !0, this.endScreen = new s5(a, g.eS(a))) : a.Zc() ? this.endScreen = new x5(a) : kjb(a) ? (this.D = !0, ljb(this), this.j ? this.endScreen = new p5(a) : this.endScreen = new u5(a)) : c.Jg ? this.endScreen = new jjb(a) : this.endScreen = new n5(a);
            g.Q(this, this.endScreen);
            g.KS(a, this.endScreen.element, 4);
            mjb(this);
            this.listeners.T(a, "videodatachange", this.onVideoDataChange, this);
            this.listeners.T(a, g.iE("endscreen"), function(e) {
                b.onCueRangeEnter(e)
            });
            this.listeners.T(a, g.jE("endscreen"), function(e) {
                b.onCueRangeExit(e)
            })
        },
        ljb = function(a) {
            var b = a.player.getVideoData();
            if (!b || a.j === b.Xl && a.C === b.Tf) return !1;
            a.j = b.Xl;
            a.C = b.Tf;
            return !0
        },
        kjb = function(a) {
            a = a.U();
            return a.Dd && !a.Jg
        },
        mjb = function(a) {
            a.player.qf("endscreen");
            var b = a.player.getVideoData();
            b = new g.gE(Math.max((b.lengthSeconds - 10) * 1E3, 0), 0x8000000000000, {
                id: "preload",
                namespace: "endscreen"
            });
            var c = new g.gE(0x8000000000000, 0x8000000000000, {
                id: "load",
                priority: 8,
                namespace: "endscreen"
            });
            a.player.kf([b, c])
        };
    g.jS.prototype.Tt = g.da(14, function() {
        return this.app.Tt()
    });
    g.G_.prototype.Tt = g.da(13, function() {
        return this.getVideoData().GY
    });
    g.fS.prototype.Ns = g.da(12, function(a) {
        this.Fi().Ns(a)
    });
    g.nV.prototype.Ns = g.da(11, function(a) {
        this.j !== a && (this.j = a, this.Ta())
    });
    g.uW.prototype.Ns = g.da(10, function(a) {
        this.overflowButton && this.overflowButton.Ns(a)
    });
    g.fS.prototype.Os = g.da(9, function(a) {
        this.Fi().Os(a)
    });
    g.sV.prototype.Os = g.da(8, function(a) {
        this.j !== a && (this.j = a, this.Ta())
    });
    g.uW.prototype.Os = g.da(7, function(a) {
        this.shareButton && this.shareButton.Os(a)
    });
    g.fS.prototype.oC = g.da(6, function(a) {
        this.Fi().oC(a)
    });
    g.SU.prototype.oC = g.da(5, function(a) {
        this.qS !== a && (this.qS = a, this.Sq())
    });
    g.fS.prototype.nC = g.da(4, function(a) {
        this.Fi().nC(a)
    });
    g.uW.prototype.nC = g.da(3, function(a) {
        this.pS !== a && (this.pS = a, this.Rq())
    });
    g.z(k5, g.T);
    k5.prototype.select = function() {
        this.J.mp(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.HE || void 0) && this.J.logClick(this.element)
    };
    k5.prototype.onClick = function(a) {
        g.aT(a, this.J, this.j, this.suggestion.sessionData || void 0) && this.select()
    };
    k5.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                a.defaultPrevented || (this.select(), a.preventDefault())
        }
    };
    g.z(l5, g.T);
    g.k = l5.prototype;
    g.k.iI = function(a) {
        this.suggestion !== a && (this.suggestion = a, j5(this.j, a), this.playButton.updateValue("url", this.suggestion.xl()), m5(this))
    };
    g.k.Bl = function() {
        return this.C > 0
    };
    g.k.xC = function() {
        this.Bl() || (this.C = Date.now(), djb(this), bjb(this.J, fjb(this)), g.rp(this.J.getRootNode(), "countdown-running", this.Bl()))
    };
    g.k.py = function() {
        this.Lq();
        djb(this);
        var a = this.j.Ea("ytp-autonav-endscreen-upnext-header");
        a && g.ue(a, "Up next")
    };
    g.k.Lq = function() {
        this.Bl() && (this.D.stop(), this.C = 0)
    };
    g.k.select = function(a) {
        this.J.nextVideo(!1, a === void 0 ? !1 : a);
        this.Lq()
    };
    g.k.LU = function(a) {
        g.aT(a, this.J) && (a.currentTarget === this.playButton.element ? this.J.logClick(this.playButton.element) : a.currentTarget === this.j.Ea("ytp-autonav-endscreen-link-container") && (a = this.j.Ea("ytp-autonav-endscreen-link-container"), this.J.logVisibility(a, !0), this.J.logClick(a)), this.J.L("web_player_autonav_next_button_renderer") && this.G ? (this.J.ib("innertubeCommand", this.G), this.Lq()) : this.select())
    };
    g.k.u4 = function() {
        this.J.logClick(this.cancelButton.element);
        g.CS(this.J, !0);
        this.cancelCommand && this.J.ib("innertubeCommand", this.cancelCommand)
    };
    g.k.onVideoDataChange = function(a, b) {
        this.J.L("web_player_autonav_next_button_renderer") && cjb(this, b);
        var c;
        this.cancelCommand = (c = b.Zea) == null ? void 0 : c.command
    };
    g.k.Y$ = function(a) {
        if (gjb(this)) {
            var b = this.J.getVideoData().watchToWatchTransitionRenderer,
                c = b == null ? void 0 : b.fromColorPaletteDark;
            b = b == null ? void 0 : b.toColorPaletteDark;
            if (c && b) {
                var d = this.element;
                d.style.setProperty("--w2w-start-background-color", g.Nz(c.surgeColor));
                d.style.setProperty("--w2w-start-primary-text-color", g.Nz(c.primaryTitleColor));
                d.style.setProperty("--w2w-start-secondary-text-color", g.Nz(c.secondaryTitleColor));
                d.style.setProperty("--w2w-end-background-color", g.Nz(b.surgeColor));
                d.style.setProperty("--w2w-end-primary-text-color", g.Nz(b.primaryTitleColor));
                d.style.setProperty("--w2w-end-secondary-text-color", g.Nz(b.secondaryTitleColor));
                d.style.setProperty("--w2w-animation-duration", a + "ms")
            }
            g.rp(this.element, "ytp-w2w-animate", !0)
        }
    };
    g.k.t4 = function(a) {
        this.J.L("web_autonav_color_transition") && a !== 2 && g.rp(this.element, "ytp-w2w-animate", !1)
    };
    g.k.KU = function() {
        var a = this.J.Df();
        this.K && this.Hb !== a && g.py(this, a);
        m5(this);
        this.J.logVisibility(this.container.element, a);
        this.J.logVisibility(this.cancelButton.element, a);
        this.J.logVisibility(this.j.Ea("ytp-autonav-endscreen-link-container"), a);
        this.J.logVisibility(this.playButton.element, a)
    };
    g.k.Pg = function(a) {
        return a.width < 400 || a.height < 459
    };
    g.z(n5, g.T);
    g.k = n5.prototype;
    g.k.create = function() {
        this.created = !0
    };
    g.k.destroy = function() {
        this.created = !1
    };
    g.k.gE = function() {
        return !1
    };
    g.k.Df = function() {
        return !1
    };
    g.k.EZ = function() {
        return !1
    };
    g.z(o5, g.T);
    g.k = o5.prototype;
    g.k.bJ = function() {
        this.notification && (this.D.stop(), this.Nc(this.C), this.C = null, this.notification.close(), this.notification = null)
    };
    g.k.iI = function(a) {
        this.suggestion = a;
        j5(this, a, "hqdefault.jpg")
    };
    g.k.MU = function() {
        g.py(this, this.api.Df());
        this.api.logVisibility(this.element, this.api.Df());
        this.api.logVisibility(this.Ea("ytp-upnext-autoplay-icon"), this.api.Df());
        this.cancelButton && this.api.logVisibility(this.cancelButton.element, this.api.Df())
    };
    g.k.Vaa = function() {
        window.focus();
        this.bJ()
    };
    g.k.xC = function(a) {
        var b = this;
        this.Bl() || (g.ew("a11y-announce", "Up Next " + this.suggestion.title), this.B = (0, g.uu)(), this.j = new g.fp(function() {
            ijb(b, a)
        }, 25), ijb(this, a), bjb(this.api, hjb(this, a)));
        g.pp(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.hide = function() {
        g.T.prototype.hide.call(this)
    };
    g.k.Bl = function() {
        return !!this.j
    };
    g.k.py = function() {
        this.Lq();
        this.B = (0, g.uu)();
        ijb(this);
        g.np(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.Lq = function() {
        this.Bl() && (this.j.dispose(), this.j = null)
    };
    g.k.select = function(a) {
        a = a === void 0 ? !1 : a;
        if (this.api.U().L("autonav_notifications") && a && window.Notification && typeof document.hasFocus === "function") {
            var b = Notification.permission;
            b === "default" ? Notification.requestPermission() : b !== "granted" || document.hasFocus() || (this.bJ(), this.notification = new Notification("Up Next", {
                body: this.suggestion.title,
                icon: this.suggestion.gh()
            }), this.C = this.T(this.notification, "click", this.Vaa), this.D.start())
        }
        this.Lq();
        this.api.nextVideo(!1, a)
    };
    g.k.w4 = function(a) {
        !g.te(this.cancelButton.element, a.target) && g.aT(a, this.api) && (this.api.Df() && this.api.logClick(this.Ea("ytp-upnext-autoplay-icon")), this.select())
    };
    g.k.v4 = function() {
        this.api.Df() && this.cancelButton && this.api.logClick(this.cancelButton.element);
        g.CS(this.api, !0)
    };
    g.k.Maa = function(a) {
        this.api.getPresentingPlayerType();
        this.show();
        this.xC(a)
    };
    g.k.Naa = function() {
        this.api.getPresentingPlayerType();
        this.Lq();
        this.hide()
    };
    g.k.xa = function() {
        this.Lq();
        this.bJ();
        g.T.prototype.xa.call(this)
    };
    g.z(p5, n5);
    g.k = p5.prototype;
    g.k.create = function() {
        n5.prototype.create.call(this);
        this.D.T(this.player, "appresize", this.kD);
        this.D.T(this.player, "onVideoAreaChange", this.kD);
        this.D.T(this.player, "videodatachange", this.onVideoDataChange);
        this.D.T(this.player, "autonavchange", this.NU);
        this.D.T(this.player, "onAutonavCancelled", this.x4);
        this.onVideoDataChange()
    };
    g.k.show = function() {
        n5.prototype.show.call(this);
        (this.K || this.C && this.C !== this.videoData.clientPlaybackNonce) && g.CS(this.player, !1);
        g.LS(this.player) && this.gE() && !this.C ? (q5(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.j.select(!0) : this.j.xC() : this.videoData.autonavState === 3 && this.j.py()) : (g.CS(this.player, !0), q5(this));
        this.kD()
    };
    g.k.hide = function() {
        n5.prototype.hide.call(this);
        this.j.py();
        q5(this)
    };
    g.k.kD = function() {
        var a = this.player.Xn(!0, this.player.isFullscreen());
        q5(this);
        m5(this.B);
        g.rp(this.element, "ytp-autonav-cancelled-small-mode", this.Pg(a));
        g.rp(this.element, "ytp-autonav-cancelled-tiny-mode", this.zK(a));
        g.rp(this.element, "ytp-autonav-cancelled-mini-mode", a.width <= 400 || a.height <= 360);
        this.overlay && g.km(this.overlay.element, {
            width: a.width + "px"
        });
        if (!this.G)
            for (a = 0; a < this.videos.length; a++) g.rp(this.videos[a].element, "ytp-suggestion-card-with-margin", a % 2 === 1)
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        if (this.videoData !== a && a) {
            this.videoData = a;
            if ((a = this.videoData.suggestions) && a.length || this.player.L("web_player_autonav_empty_suggestions_fix")) {
                var b = g.jR(this.videoData);
                b && (this.j.iI(b), this.j !== this.B && this.B.iI(b))
            }
            if (a && a.length)
                for (b = 0; b < ojb.length; ++b) {
                    var c = ojb[b];
                    if (a && a[c]) {
                        this.videos[b] = new k5(this.player);
                        var d = this.videos[b];
                        c = a[c];
                        d.suggestion !== c && (d.suggestion = c, j5(d, c));
                        g.Q(this, this.videos[b]);
                        this.videos[b].Ja(this.N.element)
                    }
                }
            this.kD()
        }
    };
    g.k.NU = function(a) {
        a === 1 ? (this.K = !1, this.C = this.videoData.clientPlaybackNonce, this.j.Lq(), this.Hb && this.kD()) : (this.K = !0, this.Df() && (a === 2 ? this.j.xC() : a === 3 && this.j.py()))
    };
    g.k.x4 = function(a) {
        a ? this.NU(1) : (this.C = null, this.K = !1)
    };
    g.k.gE = function() {
        return this.videoData.autonavState !== 1
    };
    g.k.Pg = function(a) {
        return (a.width < 910 || a.height < 459) && !this.zK(a) && !(a.width <= 400 || a.height <= 360)
    };
    g.k.zK = function(a) {
        return a.width < 800 && !(a.width <= 400 || a.height <= 360)
    };
    g.k.Df = function() {
        return this.Hb && g.LS(this.player) && this.gE() && !this.C
    };
    var ojb = [1, 3, 2, 4];
    g.z(r5, g.T);
    g.k = r5.prototype;
    g.k.V1 = function() {
        switch (this.buttonType) {
            case 1:
                var a = "Watch again on YouTube";
                var b = 156915;
                break;
            case 2:
                a = "Continue watching on YouTube";
                b = 156942;
                break;
            default:
                a = "Continue watching on YouTube", b = 156942
        }
        this.update({
            content: a
        });
        this.J.hasVe(this.element) && this.J.destroyVe(this.element);
        this.J.createClientVe(this.element, this, b)
    };
    g.k.onClick = function(a) {
        this.J.L("web_player_log_click_before_generating_ve_conversion_params") && this.J.logClick(this.element);
        g.bT(this.getVideoUrl(), this.J, a);
        this.J.L("web_player_log_click_before_generating_ve_conversion_params") || this.J.logClick(this.element)
    };
    g.k.getVideoUrl = function() {
        var a = !0;
        switch (this.buttonType) {
            case 1:
                a = !0;
                break;
            case 2:
                a = !1
        }
        a = this.J.getVideoUrl(a, !1, !1, !0);
        var b = this.J.U();
        if (g.EP(b)) {
            var c = {};
            g.EP(b) && g.$R(this.J, "addEmbedsConversionTrackingParams", [c]);
            if (!this.J.L("embeds_web_enable_referring_feature_deprecation")) {
                a: {
                    switch (this.buttonType) {
                        case 2:
                            b = "emb_ytp_continue_watching";
                            break a
                    }
                    b = "emb_ytp_watch_again"
                }
                g.YL(c, b)
            }
            a = g.aj(a, c)
        }
        return a
    };
    g.k.logVisibility = function() {
        this.J.logVisibility(this.element, this.Hb && this.Z)
    };
    g.k.show = function() {
        g.T.prototype.show.call(this);
        this.logVisibility()
    };
    g.k.hide = function() {
        g.T.prototype.hide.call(this);
        this.logVisibility()
    };
    g.k.Kc = function(a) {
        g.T.prototype.Kc.call(this, a);
        this.logVisibility()
    };
    g.z(s5, n5);
    s5.prototype.show = function() {
        this.player.getPlayerState() !== 3 && (n5.prototype.show.call(this), this.Ne.nC(!0), this.Ne.Os(!0), this.J.U().ke || this.Ne.Ns(!0), this.J.logVisibility(this.element, !0), this.watchButton.Kc(!0))
    };
    s5.prototype.hide = function() {
        n5.prototype.hide.call(this);
        this.Ne.nC(!1);
        this.Ne.Os(!1);
        this.Ne.Ns(!1);
        this.J.logVisibility(this.element, !1);
        this.watchButton.Kc(!1)
    };
    g.z(jjb, n5);
    jjb.prototype.Ta = function() {
        var a = this.player.getVideoData();
        this.j.update({
            profilePicture: a.profilePicture,
            author: a.author
        });
        this.subscribeButton.channelId = a.Rl;
        var b = this.subscribeButton;
        a.subscribed ? b.j() : b.B()
    };
    g.z(t5, g.T);
    t5.prototype.select = function() {
        this.api.mp(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.HE || void 0) && this.api.logClick(this.element)
    };
    t5.prototype.onClick = function(a) {
        if (g.EP(this.api.U()) && this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            this.api.logClick(this.element);
            var b = this.suggestion.xl(),
                c = {};
            g.BMa(this.api, c, "emb_rel_end");
            b = g.aj(b, c);
            g.bT(b, this.api, a)
        } else g.aT(a, this.api, this.B, this.suggestion.sessionData || void 0) && this.select()
    };
    t5.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                a.defaultPrevented || (this.select(), a.preventDefault())
        }
    };
    t5.prototype.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.B = a.Ff ? !1 : b.D
    };
    g.z(u5, n5);
    g.k = u5.prototype;
    g.k.create = function() {
        n5.prototype.create.call(this);
        var a = this.player.getVideoData();
        a && (this.videoData = a);
        this.Zq();
        this.B.T(this.player, "appresize", this.Zq);
        this.B.T(this.player, "onVideoAreaChange", this.Zq);
        this.B.T(this.player, "videodatachange", this.onVideoDataChange);
        this.B.T(this.player, "autonavchange", this.bN);
        this.B.T(this.player, "onAutonavCancelled", this.y4);
        a = this.videoData.autonavState;
        a !== this.Y && this.bN(a);
        this.B.T(this.element, "transitionend", this.lca)
    };
    g.k.destroy = function() {
        g.ut(this.B);
        g.gb(this.stills);
        this.stills = [];
        n5.prototype.destroy.call(this);
        g.pp(this.element, "ytp-show-tiles");
        this.K.stop();
        this.Y = this.videoData.autonavState
    };
    g.k.gE = function() {
        return this.videoData.autonavState !== 1
    };
    g.k.show = function() {
        var a = this.Hb;
        n5.prototype.show.call(this);
        g.pp(this.element, "ytp-show-tiles");
        this.player.U().B ? g.hp(this.K) : this.K.start();
        (this.G || this.D && this.D !== this.videoData.clientPlaybackNonce) && g.CS(this.player, !1);
        v5(this) ? (w5(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.j.select(!0) : this.j.xC() : this.videoData.autonavState === 3 && this.j.py()) : (g.CS(this.player, !0), w5(this));
        a !== this.Hb && this.player.logVisibility(this.element, !0)
    };
    g.k.hide = function() {
        var a = this.Hb;
        n5.prototype.hide.call(this);
        this.j.py();
        w5(this);
        a !== this.Hb && this.player.logVisibility(this.element, !1)
    };
    g.k.lca = function(a) {
        a.target === this.element && this.Zq()
    };
    g.k.Zq = function() {
        var a, b, c, d;
        var e = ((a = this.videoData) == null ? 0 : (b = a.suggestions) == null ? 0 : b.length) ? (c = this.videoData) == null ? void 0 : c.suggestions : [(d = this.videoData) == null ? void 0 : g.jR(d)];
        if (e.length) {
            g.np(this.element, "ytp-endscreen-paginate");
            var f = this.J.Xn(!0, this.J.isFullscreen());
            if (a = g.eS(this.J)) a = a.Gh() ? 48 : 32, f.width -= a * 2;
            var h = f.width / f.height;
            d = 96 / 54;
            b = a = 2;
            var l = Math.max(f.width / 96, 2),
                m = Math.max(f.height / 54, 2);
            c = e.length;
            var n = Math.pow(2, 2);
            var p = c * n + (Math.pow(2, 2) - n);
            p += Math.pow(2, 2) -
                n;
            for (p -= n; p > 0 && (a < l || b < m);) {
                var q = a / 2,
                    r = b / 2,
                    t = a <= l - 2 && p >= r * n,
                    u = b <= m - 2 && p >= q * n;
                if ((q + 1) / r * d / h > h / (q / (r + 1) * d) && u) p -= q * n, b += 2;
                else if (t) p -= r * n, a += 2;
                else if (u) p -= q * n, b += 2;
                else break
            }
            d = !1;
            p >= 3 * n && c * n - p <= 6 && (b >= 4 || a >= 4) && (d = !0);
            n = a * 96;
            p = b * 54;
            h = n / p < h ? f.height / p : f.width / n;
            h = Math.min(h, 2);
            n = Math.floor(Math.min(f.width, n * h));
            p = Math.floor(Math.min(f.height, p * h));
            f = this.table.element;
            f.ariaLive = "polite";
            g.vm(f, n, p);
            g.km(f, {
                marginLeft: n / -2 + "px",
                marginTop: p / -2 + "px"
            });
            this.j.iI(g.jR(this.videoData));
            this.j instanceof
            l5 && m5(this.j);
            g.rp(this.element, "ytp-endscreen-takeover", v5(this));
            w5(this);
            n += 4;
            p += 4;
            h = 0;
            f.ariaBusy = "true";
            for (l = 0; l < a; l++)
                for (m = 0; m < b; m++)
                    if (q = h, t = 0, d && l >= a - 2 && m >= b - 2 ? t = 1 : m % 2 === 0 && l % 2 === 0 && (m < 2 && l < 2 ? m === 0 && l === 0 && (t = 2) : t = 2), q = g.Id(q + this.C, c), t !== 0) {
                        r = this.stills[h];
                        r || (r = new t5(this.player), this.stills[h] = r, f.appendChild(r.element));
                        u = Math.floor(p * m / b);
                        var x = Math.floor(n * l / a),
                            B = Math.floor(p * (m + t) / b) - u - 4,
                            E = Math.floor(n * (l + t) / a) - x - 4;
                        g.rm(r.element, x, u);
                        g.vm(r.element, E, B);
                        g.km(r.element, "transitionDelay",
                            (m + l) / 20 + "s");
                        g.rp(r.element, "ytp-videowall-still-mini", t === 1);
                        g.rp(r.element, "ytp-videowall-still-large", t > 2);
                        t = Math.max(E, B);
                        g.rp(r.element, "ytp-videowall-still-round-large", t >= 256);
                        g.rp(r.element, "ytp-videowall-still-round-medium", t > 96 && t < 256);
                        g.rp(r.element, "ytp-videowall-still-round-small", t <= 96);
                        q = e[q];
                        r.suggestion !== q && (r.suggestion = q, t = r.api.U(), u = g.mp(r.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", j5(r, q, u), g.EP(t) && !r.api.L("web_player_log_click_before_generating_ve_conversion_params") &&
                            (t = q.xl(), u = {}, g.$R(r.api, "addEmbedsConversionTrackingParams", [u]), r.api.L("embeds_web_enable_referring_feature_deprecation") || g.YL(u, "emb_rel_end"), t = g.aj(t, u), r.updateValue("url", t)), (q = (q = q.sessionData) && q.itct) && r.api.setTrackingParams(r.element, q));
                        h++
                    }
            f.ariaBusy = "false";
            g.rp(this.element, "ytp-endscreen-paginate", h < c);
            for (e = this.stills.length - 1; e >= h; e--) a = this.stills[e], g.re(a.element), g.fb(a);
            this.stills.length = h
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData(1);
        this.videoData !== a && (a != null && g.jR(a) ? (this.C = 0, this.videoData = a, this.Zq()) : this.player.oa("missg", {
            vid: (a == null ? void 0 : a.videoId) || "",
            cpn: (a == null ? void 0 : a.clientPlaybackNonce) || ""
        }))
    };
    g.k.z4 = function() {
        this.C += this.stills.length;
        this.Zq()
    };
    g.k.A4 = function() {
        this.C -= this.stills.length;
        this.Zq()
    };
    g.k.EZ = function() {
        return this.j.Bl()
    };
    g.k.bN = function(a) {
        a === 1 ? (this.G = !1, this.D = this.videoData.clientPlaybackNonce, this.j.Lq(), this.Hb && this.Zq()) : (this.G = !0, this.Hb && v5(this) && (a === 2 ? this.j.xC() : a === 3 && this.j.py()))
    };
    g.k.y4 = function(a) {
        if (a) {
            for (a = 0; a < this.stills.length; a++) this.J.logVisibility(this.stills[a].element, !0);
            this.bN(1)
        } else this.D = null, this.G = !1;
        this.Zq()
    };
    g.k.Df = function() {
        return this.Hb && v5(this)
    };
    g.z(x5, n5);
    x5.prototype.show = function() {
        if (this.player.getPlayerState() !== 3) {
            n5.prototype.show.call(this);
            var a = this.B;
            if (a) {
                var b = this.j.suggestionData.length > 0;
                g.rp(this.element, "ytp-shorts-branded-ui", b);
                b ? a.show() : a.hide()
            }
            var c;
            (c = g.eS(this.player)) == null || c.oC(!0);
            this.player.logVisibility(this.element, !0);
            this.watchButton.Kc(!0)
        }
    };
    x5.prototype.hide = function() {
        n5.prototype.hide.call(this);
        var a;
        (a = g.eS(this.player)) == null || a.oC(!1);
        this.player.logVisibility(this.element, !1);
        this.watchButton.Kc(!1)
    };
    g.z(njb, g.jU);
    g.k = njb.prototype;
    g.k.uv = function() {
        var a = this.player.getVideoData(),
            b = a.mutedAutoplay;
        if ((this.player.Zc() || this.B) && !b) return !0;
        var c;
        var d = !!((a == null ? 0 : g.jR(a)) || (a == null ? 0 : (c = a.suggestions) == null ? 0 : c.length));
        d = !kjb(this.player) || d;
        a = a.Hj;
        c = this.player.VE();
        return d && !a && !c && !b
    };
    g.k.Df = function() {
        return this.endScreen.Df()
    };
    g.k.N9 = function() {
        return this.Df() ? this.endScreen.EZ() : !1
    };
    g.k.xa = function() {
        this.player.qf("endscreen");
        g.jU.prototype.xa.call(this)
    };
    g.k.load = function() {
        var a = this.player.getVideoData();
        var b = a.transitionEndpointAtEndOfStream;
        if (b && b.videoId) {
            var c = this.player.Ab().Ie.get("heartbeat"),
                d = g.jR(a);
            !d || b.videoId !== d.videoId || a.fW ? (this.player.mp(b.videoId, void 0, void 0, !0, !0, b), c && c.IK("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), a = !0) : a = !1
        } else a = !1;
        a || (g.jU.prototype.load.call(this), this.endScreen.show())
    };
    g.k.unload = function() {
        g.jU.prototype.unload.call(this);
        this.endScreen.hide();
        this.endScreen.destroy()
    };
    g.k.onCueRangeEnter = function(a) {
        this.uv() && (this.endScreen.created || this.endScreen.create(), a.getId() === "load" && this.load())
    };
    g.k.onCueRangeExit = function(a) {
        a.getId() === "load" && this.loaded && this.unload()
    };
    g.k.onVideoDataChange = function() {
        mjb(this);
        this.D && ljb(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.j ? this.endScreen = new p5(this.player) : this.endScreen = new u5(this.player), g.Q(this, this.endScreen), g.KS(this.player, this.endScreen.element, 4))
    };
    g.iU("endscreen", njb);
})(_yt_player);