(function(g) {
    var window = this;
    'use strict';
    var meb = function(a, b, c) {
            var d;
            g.H(function(e) {
                switch (e.j) {
                    case 1:
                        var f = b;
                        a.X.L("web_player_pt_tt") ? (f = g.Vr(f).exp || "", f = f.includes("xpv") || f.includes("xpe")) : f = !1;
                        if (!f) {
                            e.Ia(2);
                            break
                        }
                        if (a.videoData.hw) {
                            e.Ia(3);
                            break
                        }
                        g.xa(e, 4);
                        return g.G(e, a.D.promise, 6);
                    case 6:
                        g.za(e, 3);
                        break;
                    case 4:
                        return g.Aa(e), e.return();
                    case 3:
                        d = {
                            potc: "1",
                            pot: a.videoData.hw
                        }, b = g.Wr(b, d);
                    case 2:
                        a.j = g.ps(b, c), g.va(e)
                }
            })
        },
        k3 = function(a) {
            a.isActive() || a.start()
        },
        neb = function(a, b) {
            return b ? a.captionsInitialState : "CAPTIONS_INITIAL_STATE_UNKNOWN"
        },
        oeb = function(a, b) {
            var c = new g.oQ;
            c.languageCode = a.languageCode;
            c.languageName = a.languageName;
            c.name = a.name;
            c.displayName = a.displayName;
            c.kind = a.kind;
            c.isDefault = !1;
            c.j = a.j;
            c.isTranslateable = a.isTranslateable;
            c.vssId = a.vssId;
            c.url = a.url;
            c.translationLanguage = b;
            a.xtags && (c.xtags = a.xtags);
            a.captionId && (c.captionId = a.captionId);
            return c
        },
        peb = function(a, b) {
            var c, d, e;
            return g.H(function(f) {
                if (f.j == 1) return c = a + "|" + b, g.G(f, g.Su(), 2);
                if (f.j != 3) {
                    d = f.B;
                    if (!d) throw g.nu("gct");
                    return g.G(f, g.GQ(d), 3)
                }
                e = f.B;
                return f.return(e.get("captions", c))
            })
        },
        qeb = function(a, b, c) {
            peb(a, b).then(function(d) {
                d && c(d.trackData, new g.oQ(d.metadata))
            })
        },
        teb = function(a) {
            if (!reb.test(a)) throw Error("'" + a + "' is not a valid hex color");
            a.length == 4 && (a = a.replace(seb, "#$1$1$2$2$3$3"));
            a = a.toLowerCase();
            a = parseInt(a.slice(1), 16);
            return [a >> 16, a >> 8 & 255, a & 255]
        },
        ueb = function() {
            return g.At("yt-player-caption-display-settings")
        },
        l3 = function() {
            this.segments = []
        },
        veb = function(a, b) {
            var c = g.Hb(a.segments, b);
            c >= 0 || c < 0 && (-c - 1) % 2 === 1 || (c = -c - 1, c > 0 && b - a.segments[c - 1] === 1 && c < a.segments.length && a.segments[c] - b === 1 ? (g.tb(a.segments, c), g.tb(a.segments, c - 1)) : c > 0 && b - a.segments[c - 1] === 1 ? a.segments[c - 1] = b : c < a.segments.length && a.segments[c] - b === 1 ? a.segments[c] = b : (g.Fb(a.segments, c, 0, b), g.Fb(a.segments, c + 1, 0, b)))
        },
        web = function(a, b, c, d, e, f) {
            g.K.call(this);
            this.policy = a;
            this.player = b;
            this.qa = c;
            this.Z = d;
            this.G = e;
            this.Y = f;
            this.D = new l3;
            this.K = -1;
            this.C = this.B = this.j = null;
            this.N = new g.fp(this.XZ, 1E3, this);
            this.events = new g.EF(this);
            g.Q(this, this.N);
            g.Q(this, this.events);
            this.events.T(b, "SEEK_COMPLETE", this.DB);
            this.DB();
            this.XZ()
        },
        xeb = function(a) {
            return a.j && a.j.Mf ? a.j.Mf + a.player.Ec() < a.player.getCurrentTime() : !1
        },
        yeb = function(a, b) {
            if (a.policy.XC && a.policy.Ul && a.player.Yt()) {
                var c = g.YN(b, a.policy, {});
                c.set("pot", a.player.Yt());
                c = c.Ee()
            } else c = g.YN(b, a.policy, {}).Ee();
            var d = {
                format: "RAW",
                withCredentials: !0
            };
            if (a.policy.Fa) {
                d.method = "POST";
                var e = b.D,
                    f = (0, g.gY)([120, 0]);
                e && g.BL(e, g.jM);
                d.postBody = f
            }
            a.G && (d.responseType = "arraybuffer");
            a.C = g.us(c, d, 3, 100).then(function(h) {
                a: {
                    h = h.xhr;a.Ma();
                    if (a.B) {
                        var l = !(a.G ? h.response : h.responseText) || h.status >= 400,
                            m = g.TEa(h);
                        if (m) {
                            h = g.YN(a.B, a.policy, {});
                            a.B.yl(h, m);
                            yeb(a, a.B);
                            break a
                        }
                        l ? a.player.oa("capfail", {
                            status: h.status
                        }) : (a.player.Gi().Oi("fcb_r"), m = a.B.jb[0].Pa,
                            a.Z != null && a.K !== m && (l = a.B.jb[0], a.G ? a.Z(h.response, (l.startTime + a.player.Ec()) * 1E3) : a.Z(h.responseText, (l.startTime + a.player.Ec()) * 1E3), a.K = m))
                    }
                    a.B = null;a.C = null
                }
            }).Ml(function(h) {
                a.B = null;
                a.C = null;
                var l;
                a.player.oa("capfail", {
                    status: (l = h.xhr) == null ? void 0 : l.status
                })
            });
            a.B = b;
            veb(a.D, a.B.jb[0].Pa)
        },
        m3 = function(a, b) {
            g.mU.call(this, b.U());
            this.j = a;
            this.J = b;
            this.C = null;
            this.K = !1;
            this.N = g.CD(this.J.U()) && !this.j.isManifestless
        },
        Aeb = function(a, b) {
            var c = [],
                d;
            for (d in a.j.j)
                if (a.j.j.hasOwnProperty(d)) {
                    var e = a.j.j[d];
                    if (g.aPa(e, b || null)) {
                        var f = e.info.id,
                            h = f,
                            l = "." + f,
                            m = "",
                            n = "",
                            p = "";
                        if (e = e.info.captionTrack) f = e.languageCode, h = e.displayName, l = e.vssId, m = e.kind, a.J.U().L("html5_expose_xtags_through_caption_track") && (n = e.xtags), p = e.id;
                        else {
                            e = f;
                            var q = g.mcb.get(e);
                            q == null && (q = zeb[e] || zeb[e.replace(/-/g, "_")], g.mcb.set(e, q));
                            h = q || h
                        }
                        c.push(new g.oQ({
                            id: d,
                            languageCode: f,
                            languageName: h,
                            is_servable: !0,
                            is_default: !0,
                            is_translateable: !1,
                            vss_id: l,
                            kind: m,
                            xtags: n,
                            captionId: p
                        }))
                    }
                }
            return c
        },
        Beb = function(a, b) {
            return b != null && b in a.j.j ? a.j.j[b] : null
        },
        Ceb = function(a, b, c) {
            var d = [],
                e;
            for (e in a.j.j)
                if (a.j.j.hasOwnProperty(e)) {
                    var f = a.j.j[e];
                    if (g.aPa(f, c || null)) {
                        var h = f.info.captionTrack;
                        h && h.languageCode === b && d.push(f)
                    }
                }
            return d.length ? d[0] : null
        },
        Deb = function() {
            var a = void 0;
            a = a === void 0 ? {} : a;
            var b = "suggest_correction" in g.zcb ? g.zcb.suggest_correction : "Edit caption";
            b = b || "";
            var c = {},
                d;
            for (d in a) {
                c = {
                    NF: c.NF
                };
                c.NF = d;
                var e = function(f) {
                    return function() {
                        return String(a[f.NF])
                    }
                }(c);
                b = b.replace(new RegExp("\\$\\{" + c.NF + "\\}", "gi"), e);
                b = b.replace(new RegExp("\\$" + c.NF, "gi"), e)
            }
            return b
        },
        n3 = function(a, b, c, d, e, f, h, l, m, n) {
            var p = n.isInline() && !0,
                q = {};
            Object.assign(q, b);
            Object.assign(q, a.params);
            Object.assign(q, c);
            var r = {};
            Object.assign(r, b.Pe);
            a.params.Pe && Object.assign(r, a.params.Pe);
            Object.assign(r, c.Pe);
            p && (q.windowOpacity = .6, r.backgroundOpacity = 0);
            q.Pe = r;
            var t = q.Ni === 1,
                u = [{
                    I: "span",
                    S: "captions-text",
                    W: {
                        style: "word-wrap: normal; display: block;"
                    }
                }],
                x, B, E;
            (n = l.ob("caption_edit_on_hover") && ((x = n.getVideoData().getPlayerResponse()) == null ? void 0 : (B = x.captions) == null ? void 0 : (E = B.playerCaptionsTracklistRenderer) == null ? void 0 : E.openTranscriptCommand)) &&
            u.unshift({
                I: "button",
                S: "caption-edit",
                W: {
                    tabindex: "0",
                    "aria-label": Deb()
                },
                V: [{
                    I: "svg",
                    W: {
                        fill: "#e3e3e3",
                        height: "100%",
                        viewBox: "5 5 38 38",
                        width: "100%"
                    },
                    V: [{
                        I: "path",
                        W: {
                            d: "M9 39h2.2l24.25-24.25-1.1-1.1-1.1-1.1L9 36.8Zm-3 3v-6.4L35.4 6.2q.85-.85 2.12-.82 1.27.02 2.12.87L41.8 8.4q.85.85.85 2.1t-.85 2.1L12.4 42Zm33.5-31.55L37.45 8.4Zm-4.05 4.3-1.1-1.1-1.1-1.1 2.2 2.2Z"
                        }
                    }]
                }]
            });
            g.T.call(this, {
                I: "div",
                S: "caption-window",
                W: {
                    id: "caption-window-" + a.id,
                    dir: t ? "rtl" : "ltr",
                    tabindex: "0",
                    lang: q.lang
                },
                V: u
            });
            var F =
                this;
            this.K = [];
            this.Fa = !1;
            this.B = a;
            this.Na = this.Ka = null;
            this.playerWidth = f;
            this.playerHeight = h;
            this.N = null;
            this.maxWidth = f * .96;
            this.maxHeight = h * .96;
            this.j = q;
            this.Lc = c;
            this.ra = b;
            this.D = this.Ea("captions-text");
            this.Tb = this.D.style.getPropertyValue("box-decoration-break") !== "" || this.D.style.getPropertyValue("-webkit-box-decoration-break") !== "";
            this.Va = Eeb(d, e, f, h);
            this.Bc = m;
            n && (this.G = this.Ea("caption-edit"), this.T(this.G, "click", function() {
                F.Bc()
            }));
            this.type = 0;
            this.bb = this.Va * Feb(r);
            this.Kb = p;
            a = new g.HT(this.element, !0);
            g.Q(this, a);
            a.subscribe("dragstart", this.s6, this);
            a.subscribe("dragmove", this.r6, this);
            a.subscribe("dragend", this.q6, this);
            this.rb = this.fb = this.zb = this.Bb = 0;
            a = "";
            this.j.windowOpacity && (a = teb(this.j.windowColor), a = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + this.j.windowOpacity + ")");
            b = {
                "background-color": a,
                display: this.j.isVisible === !1 ? "none" : "",
                "text-align": Geb[this.j.textAlign]
            };
            this.Tb && (b["border-radius"] = a ? this.bb / 8 + "px" : "");
            (this.C =
                this.B.params.Ni === 2 || this.B.params.Ni === 3) && Heb(this, this.element);
            g.km(this.element, b);
            if (p) {
                var I;
                (I = this.element.parentElement) == null || I.style.setProperty("--caption-window-color", a)
            }
            switch (this.j.wm) {
                case 0:
                case 1:
                case 2:
                    g.np(this.element, "ytp-caption-window-top");
                    break;
                case 6:
                case 7:
                case 8:
                    g.np(this.element, "ytp-caption-window-bottom")
            }
            this.Xa = l.ob("html5_deprecate_arial_unicode_ms")
        },
        Heb = function(a, b) {
            var c = "vertical-rl";
            a.j.UT === 1 && (c = "vertical-lr");
            g.mm && (c = c === "vertical-lr" ? "tb-lr" : "tb-rl");
            g.km(b, "-o-writing-mode", c);
            g.km(b, "-webkit-writing-mode", c);
            g.km(b, "writing-mode", c);
            g.km(b, "text-orientation", "upright");
            g.np(b, "ytp-vertical-caption");
            a.B.params.Ni === 3 && (g.km(b, "text-orientation", ""), g.km(b, "transform", "rotate(180deg)"))
        },
        Feb = function(a) {
            var b = 1 + .25 * (a.fontSizeIncrement || 0);
            if (a.offset === 0 || a.offset === 2) b *= .8;
            return b
        },
        Ieb = function(a, b) {
            var c = {},
                d = b.background ? b.background : a.j.Pe.background;
            if (b.backgroundOpacity != null || b.background) {
                var e = b.backgroundOpacity != null ? b.backgroundOpacity : a.j.Pe.backgroundOpacity;
                d = teb(d);
                c.background = "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + e + ")";
                a.Tb && (c["box-decoration-break"] = "clone", c["border-radius"] = a.bb / 8 + "px")
            }
            if (b.fontSizeIncrement != null || b.offset != null) c["font-size"] = a.Va * Feb(b) + "px";
            d = 1;
            e = b.color || a.j.Pe.color;
            if (b.color || b.textOpacity != null) e = teb(e), d = b.textOpacity == null ? a.j.Pe.textOpacity : b.textOpacity, e = "rgba(" + e[0] + "," + e[1] + "," + e[2] + "," + d + ")",
                c.color = e, c.fill = e;
            var f = b.charEdgeStyle;
            f === 0 && (f = void 0);
            if (f) {
                e = "rgba(34, 34, 34, " + d + ")";
                var h = "rgba(204, 204, 204, " + d + ")";
                b.yO && (h = e = b.yO);
                var l = a.Va / 16 / 2,
                    m = Math.max(l, 1),
                    n = Math.max(2 * l, 1),
                    p = Math.max(3 * l, 1),
                    q = Math.max(5 * l, 1);
                d = [];
                switch (f) {
                    case 4:
                        for (; p <= q; p += l) d.push(n + "px " + n + "px " + p + "px " + e);
                        break;
                    case 1:
                        n = window.devicePixelRatio >= 2 ? .5 : 1;
                        for (f = m; f <= p; f += n) d.push(f + "px " + f + "px " + e);
                        break;
                    case 2:
                        d.push(m + "px " + m + "px " + h);
                        d.push("-" + m + "px -" + m + "px " + e);
                        break;
                    case 3:
                        for (p = 0; p < 5; p++) d.push("0 0 " +
                            n + "px " + e)
                }
                c["text-shadow"] = d.join(", ")
            }
            e = "";
            switch (b.fontFamily) {
                case 1:
                    e = '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
                    break;
                case 2:
                    e = '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
                    break;
                case 3:
                    e = '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
                    break;
                case 5:
                    e = '"Comic Sans MS", Impact, Handlee, fantasy';
                    break;
                case 6:
                    e = '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
                    break;
                case 7:
                    e = g.Hs() ?
                        '"Carrois Gothic SC", sans-serif-smallcaps' : a.Xa ? 'Arial, Helvetica, Verdana, "Marcellus SC", sans-serif' : '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif';
                    break;
                case 0:
                case 4:
                    e = a.Xa ? '"YouTube Noto", Roboto, Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif' : '"YouTube Noto", Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif'
            }
            e && (c["font-family"] = e);
            e = b.offset;
            e == null && (e = a.j.Pe.offset);
            switch (e) {
                case 0:
                    c["vertical-align"] = "sub";
                    break;
                case 2:
                    c["vertical-align"] = "super"
            }
            b.fontFamily === 7 && (c["font-variant"] = "small-caps");
            b.bold && (c["font-weight"] = "bold");
            b.italic && (c["font-style"] = "italic");
            b.underline && (c["text-decoration"] = "underline");
            b.C9 && (c.visibility = "hidden");
            b.gZ === 1 && a.C && (c["text-combine-upright"] = "all", c["text-orientation"] = "mixed", e = g.aQ || g.lu, a.B.params.Ni === 3 ? c.transform = e ? "rotate(90deg)" : "rotate(180deg)" : e && (c.transform = "rotate(-90deg)"));
            if (b.Xo === 1 || b.Xo === 2 || b.Xo === 3 || b.Xo === 4 || b.Xo === 5)
                if (g.aQ) c["font-weight"] =
                    "bold";
                else switch (c["text-emphasis-style"] = "filled circle", c["text-emphasis-color"] = "currentcolor", c["webkit-text-emphasis"] = "filled circle", b.Xo) {
                    case 4:
                    case 3:
                        c["text-emphasis-position"] = "under left";
                        c["webkit-text-emphasis-position"] = "under left";
                        break;
                    case 5:
                    case 2:
                        c["text-emphasis-position"] = "over right", c["webkit-text-emphasis-position"] = "over right"
                }
            return c
        },
        o3 = function(a) {
            a = a.split("px");
            return a.length > 0 ? (a = Number(a[0])) ? a : 0 : 0
        },
        Jeb = function(a) {
            a.N = g.me("SPAN");
            g.km(a.N, {
                display: "block"
            });
            g.np(a.N, "caption-visual-line");
            a.D.appendChild(a.N)
        },
        Keb = function(a, b) {
            var c = g.me("SPAN");
            g.km(c, {
                display: "inline-block",
                "white-space": "pre-wrap"
            });
            g.km(c, Ieb(a, b));
            c.classList.add("ytp-caption-segment");
            a.N.appendChild(c);
            c.previousElementSibling && (g.km(c.previousElementSibling, {
                "border-top-right-radius": "0",
                "border-bottom-right-radius": "0"
            }), g.km(c, {
                "border-top-left-radius": "0",
                "border-bottom-left-radius": "0"
            }));
            return c
        },
        Leb = function(a, b, c) {
            a.Fa = a.Fa || !!c;
            var d = {};
            Object.assign(d, a.j.Pe);
            Object.assign(d, c || b.j);
            Object.assign(d, a.Lc.Pe);
            (c = !a.N) && Jeb(a);
            for (var e = a.Ka && a.Na && g.Ic(d, a.Na) ? a.Ka : Keb(a, d), f = typeof b.text === "string", h = f ? b.text.split("\n") : [b.text], l = 0; l < h.length; l++) {
                var m = l > 0 || !b.append,
                    n = h[l];
                m && !c ? (Jeb(a), e = Keb(a, d)) : m && c && (c = !1);
                n && (e.appendChild(f ? g.ne(n) : n), f || n.tagName !== "RUBY" || n.childElementCount !== 4 || g.aQ || !g.nm(n.children[2], "text-emphasis") || (m = a.C ? "padding-right" : "padding-top", g.nm(n.children[2], "text-emphasis-position") && (m =
                    a.C ? "padding-left" : "padding-bottom"), g.rc ? g.km(e, m, "1em") : g.km(e, m, "0.5em")))
            }
            a.Na = d;
            a.Ka = e;
            a.K.push(b)
        },
        Eeb = function(a, b, c, d) {
            var e = b / 360 * 16;
            b >= a && (a = 640, d > c * 1.3 && (a = 480), e = c / a * 16);
            return e
        },
        Neb = function() {
            this.C = this.time = this.mode = this.B = 0;
            this.D = new Meb(this);
            this.G = new Meb(this);
            this.j = [];
            this.clear()
        },
        Peb = function(a, b, c) {
            if (a === 255 && b === 255 || !a && !b) return {
                Gw: a,
                Ct: b,
                result: 0
            };
            a = Oeb[a];
            b = Oeb[b];
            if (a & 128) {
                var d;
                if (d = !(b & 128)) d = b, d = c.ue() && c.Ct === d;
                if (d) return {
                    Gw: a,
                    Ct: b,
                    result: 1
                }
            } else if (b & 128 && 1 <= a && a <= 31) return {
                Gw: a,
                Ct: b,
                result: 2
            };
            return {
                Gw: a,
                Ct: b,
                result: 3
            }
        },
        Reb = function(a, b, c, d) {
            b === 255 && c === 255 || !b && !c ? (++a.C === 45 && a.reset(), a.D.B.clear(), a.G.B.clear()) : (a.C = 0, Qeb(a.D, b, c, d))
        },
        Seb = function(a, b) {
            a.j.sort(function(e, f) {
                var h = e.time - f.time;
                return h === 0 ? e.order - f.order : h
            });
            for (var c = g.v(a.j), d = c.next(); !d.done; d = c.next()) d = d.value, a.time = d.time, d.type === 0 ? Reb(a, d.hX, d.iX, b) : d.type === 1 && a.B & 496 && Qeb(a.G, d.hX, d.iX, b);
            a.j.length = 0
        },
        p3 = function() {
            this.type = 0
        },
        q3 = function() {
            this.state = this.Ct = this.Gw = 0
        },
        Teb = function() {
            this.timestamp = this.j = 0
        },
        r3 = function(a) {
            this.D = a;
            this.B = [];
            this.j = this.col = this.row = 0;
            this.style = new p3;
            for (a = this.C = 0; a <= 15; a++) {
                this.B[a] = [];
                for (var b = 0; b <= 32; b++) this.B[a][b] = new Teb
            }
        },
        s3 = function(a, b) {
            if (a.style.type === 3) {
                for (var c = 0, d = 0, e = a.D.time + 0, f = "", h = "", l = e, m = 1; m <= 15; ++m) {
                    for (var n = !1, p = d ? d : 1; p <= 32; ++p) {
                        var q = a.B[m][p];
                        if (q.j !== 0) {
                            c === 0 && (c = m, d = p);
                            n = String.fromCharCode(q.j);
                            var r = q.timestamp;
                            r < e && (e = r);
                            q.timestamp = l;
                            h && (f += h, h = "");
                            f += n;
                            n = !0
                        }
                        if ((q.j === 0 || p === 32) && n) {
                            h = "\n";
                            break
                        } else if (d && !n) break
                    }
                    if (c && !n) break
                }
                f && b.D(c, d, e, l, f)
            } else
                for (d = c = 0, f = e = a.D.time + 0, h = 1; h <= 15; ++h)
                    for (l = "", m = 1; m <= 32; ++m)
                        if (p = a.B[h][m], q = p.j, q !== 0 && (c === 0 && (c = h, d = m), n = String.fromCharCode(q), r = p.timestamp, r <= e && (e = r), l += n, p.reset()), m === 32 || q === 0) l && b.D(c, d, e, f, l), e = f, l = "", d = c = 0
        },
        Yeb = function(a, b) {
            switch (a) {
                case 0:
                    return Ueb[(b & 127) - 32];
                case 1:
                    return Veb[b & 15];
                case 2:
                    return Web[b & 31];
                case 3:
                    return Xeb[b & 31]
            }
            return 0
        },
        t3 = function(a) {
            return a.B[a.row][a.col]
        },
        u3 = function(a, b, c) {
            b >= 2 && a.col > 1 && (--a.col, t3(a).j = 0);
            var d = t3(a);
            d.timestamp = a.D.time + 0;
            d.j = Yeb(b, c);
            a.col < 32 && a.col++
        },
        Zeb = function(a, b, c, d) {
            for (var e = 0; e < d; e++)
                for (var f = 0; f <= 32; f++) {
                    var h = a.B[b + e][f],
                        l = a.B[c + e][f];
                    h.j = l.j;
                    h.timestamp = l.timestamp
                }
        },
        v3 = function(a, b, c) {
            for (var d = 0; d < c; d++)
                for (var e = 0; e <= 32; e++) a.B[b + d][e].reset()
        },
        $eb = function(a) {
            a.row = a.j > 0 ? a.j : 1;
            a.col = 1;
            v3(a, 0, 15)
        },
        afb = function(a) {
            this.C = a;
            this.G = 0;
            this.style = new p3;
            this.K = new r3(this.C);
            this.N = new r3(this.C);
            this.text = new r3(this.C);
            this.B = this.K;
            this.D = this.N;
            this.j = this.B
        },
        bfb = function(a, b, c) {
            var d = a.B,
                e = !1;
            switch (a.style.get()) {
                case 4:
                case 1:
                case 2:
                    a.style.get() === 4 && d.j > 0 || (s3(d, c), $eb(a.B), $eb(a.D), d.row = 15, d.j = b, e = !0)
            }
            a.style.set(3);
            a.j = d;
            a.j.style = a.style;
            a.C.mode = 1 << d.C;
            e ? d.col = 1 : d.j !== b && (d.j > b ? (s3(d, c), v3(d, d.row - d.j, b)) : d.row < b && (b = d.j), d.j = b)
        },
        cfb = function(a) {
            a.style.set(1);
            a.j = a.D;
            a.j.j = 0;
            a.j.style = a.style;
            a.C.mode = 1 << a.j.C
        },
        dfb = function(a) {
            a.style.set(4);
            a.j = a.text;
            a.j.style = a.style;
            a.C.mode = 1 << a.j.C
        },
        Meb = function(a) {
            this.j = a;
            this.G = 0;
            this.C = new afb(this.j);
            this.K = new afb(this.j);
            this.B = new q3;
            this.D = this.C
        },
        Qeb = function(a, b, c, d) {
            a.B.update();
            b = Peb(b, c, a.B);
            switch (b.result) {
                case 0:
                    return;
                case 1:
                case 2:
                    return
            }
            var e = b.Gw;
            c = b.Ct;
            if (32 <= e || !e) a.j.mode & a.j.B && (b = e, b & 128 && (b = 127), c & 128 && (c = 127), a = a.D.j, b & 96 && u3(a, 0, b), c & 96 && u3(a, 0, c), b !== 0 && c !== 0 && a.style.type === 3 && s3(a, d));
            else if (e & 16) a: if (!a.B.matches(e, c) && (b = a.B, b.Gw = e, b.Ct = c, b.state = 2, b = e & 8 ? a.K : a.C, a.D = b, a.j.mode = 1 << (a.G << 2) + (b.G << 1) + (b.style.type === 4 ? 1 : 0), (a.j.mode | 1 << (a.G << 2) + (b.G << 1) + (b.style.type !== 4 ? 1 : 0)) & a.j.B))
                if (c & 64) {
                    d = [11, 11, 1, 2, 3, 4, 12, 13, 14, 15, 5, 6, 7, 8, 9, 10][(e & 7) << 1 | c >> 5 & 1];
                    a = c & 16 ? ((c & 14) >> 1) * 4 : 0;
                    c = b.j;
                    switch (b.style.get()) {
                        case 4:
                            d = c.row;
                            break;
                        case 3:
                            if (d !== c.row) {
                                if (d < c.j && (d = c.j, d === c.row)) break;
                                var f = 1 + c.row - c.j,
                                    h = 1 + d - c.j;
                                Zeb(c, h, f, c.j);
                                b = f;
                                e = c.j;
                                h < f ? (f = h + e - f, f > 0 && (b += f, e -= f)) : (f = f + e - h, f > 0 && (e -= f));
                                v3(c, b, e)
                            }
                    }
                    c.row = d;
                    c.col = a + 1
                } else switch (e & 7) {
                    case 1:
                        switch (c & 112) {
                            case 32:
                                u3(b.j, 0, 32);
                                break a;
                            case 48:
                                c === 57 ? (d = b.j, t3(d).j = 0, d.col < 32 && d.col++) : u3(b.j, 1, c & 15)
                        }
                        break;
                    case 2:
                        c & 32 && u3(b.j, 2, c & 31);
                        break;
                    case 3:
                        c & 32 && u3(b.j, 3, c & 31);
                        break;
                    case 4:
                    case 5:
                        if (32 <= c && c <= 47) switch (c) {
                            case 32:
                                cfb(b);
                                break;
                            case 33:
                                d = b.j;
                                d.col > 1 && (--d.col, t3(d).j = 0);
                                break;
                            case 36:
                                d = b.j;
                                b = t3(d);
                                for (a = 0; a <= 15; a++)
                                    for (c = 0; c <= 32; c++)
                                        if (d.B[a][c] === b) {
                                            for (; c <= 32; c++) d.B[a][c].reset();
                                            break
                                        }
                                break;
                            case 37:
                                bfb(b, 2, d);
                                break;
                            case 38:
                                bfb(b, 3, d);
                                break;
                            case 39:
                                bfb(b, 4, d);
                                break;
                            case 40:
                                u3(b.j, 0, 32);
                                break;
                            case 41:
                                b.style.set(2);
                                b.j = b.B;
                                b.j.j = 0;
                                b.j.style = b.style;
                                b.C.mode = 1 << b.j.C;
                                break;
                            case 42:
                                d = b.text;
                                d.j = 15;
                                d.style.set(4);
                                $eb(d);
                                dfb(b);
                                break;
                            case 43:
                                dfb(b);
                                break;
                            case 44:
                                a = b.B;
                                switch (b.style.get()) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        s3(a,
                                            d)
                                }
                                v3(a, 0, 15);
                                break;
                            case 45:
                                b: {
                                    a = b.j;
                                    switch (b.style.get()) {
                                        default:
                                            case 2:
                                            case 1:
                                            break b;
                                        case 4:
                                                if (a.row < 15) {
                                                ++a.row;
                                                a.col = 1;
                                                break b
                                            }break;
                                        case 3:
                                    }
                                    a.j < 2 && (a.j = 2, a.row < a.j && (a.row = a.j));b = a.row - a.j + 1;s3(a, d);Zeb(a, b, b + 1, a.j - 1);v3(a, a.row, 1)
                                }
                                break;
                            case 46:
                                v3(b.D, 0, 15);
                                break;
                            case 47:
                                s3(b.B, d), b.D.updateTime(b.C.time + 0), d = b.D, b.D = b.B, b.B = d, cfb(b)
                        }
                        break;
                    case 7:
                        switch (c) {
                            case 33:
                            case 34:
                            case 35:
                                d = b.j, (d.col += c & 3) > 32 && (d.col = 32)
                        }
                }
        },
        efb = function() {},
        w3 = function(a, b, c, d, e, f, h) {
            f = f === void 0 ? !1 : f;
            h = h === void 0 ? null : h;
            g.gE.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.windowId = d;
            this.text = e;
            this.append = f;
            this.j = h
        },
        gfb = function(a, b, c, d, e, f, h) {
            var l = f[0],
                m = h[l.getAttribute("p")];
            if (m.fg === 1) {
                var n = f[1],
                    p = f[2];
                f = f[3];
                l.getAttribute("t");
                n.getAttribute("t");
                p.getAttribute("t");
                f.getAttribute("t");
                l.getAttribute("p");
                n.getAttribute("p");
                f.getAttribute("p");
                h = h[p.getAttribute("p")];
                l = ffb(l.textContent, n.textContent, p.textContent, f.textContent, h);
                return new w3(a, b, e, c, l, d, m)
            }
            switch (m.fg) {
                case 9:
                case 10:
                    m.Xo = 1;
                    break;
                case 11:
                    m.Xo = 2;
                    break;
                case 12:
                    m.Xo = 3;
                    break;
                case 13:
                    m.Xo = 4;
                    break;
                case 14:
                    m.Xo = 5
            }
            return new w3(a, b, e, c, l.textContent || "", d, m)
        },
        ffb = function(a, b, c, d, e) {
            var f = g.Hs(),
                h =
                f ? g.me("DIV") : g.me("RUBY"),
                l = g.me("SPAN");
            l.textContent = a;
            h.appendChild(l);
            a = f ? g.me("DIV") : g.me("RP");
            a.textContent = b;
            h.appendChild(a);
            b = f ? g.me("DIV") : g.me("RT");
            b.textContent = c;
            h.appendChild(b);
            c = e.fg;
            if (c === 10 || c === 11 || c === 12 || c === 13 || c === 14)
                if (g.km(b, "text-emphasis-style", "filled circle"), g.km(b, "text-emphasis-color", "currentcolor"), g.km(b, "webkit-text-emphasis", "filled circle"), e.fg === 11 || e.fg === 13) g.km(b, "webkit-text-emphasis-position", "under left"), g.km(b, "text-emphasis-position", "under left");
            c = !0;
            if (e.fg === 4 || e.fg === 7 || e.fg === 12 ||
                e.fg === 14) g.km(h, "ruby-position", "over"), g.km(h, "-webkit-ruby-position", "before");
            else if (e.fg === 5 || e.fg === 6 || e.fg === 11 || e.fg === 13) g.km(h, "ruby-position", "under"), g.km(h, "-webkit-ruby-position", "after"), c = !1;
            e = f ? g.me("DIV") : g.me("RP");
            e.textContent = d;
            h.appendChild(e);
            f && (d = c, g.km(h, {
                display: "inline-block",
                position: "relative"
            }), f = h.firstElementChild.nextElementSibling, g.km(f, "display", "none"), f = f.nextElementSibling, g.km(f, {
                "font-size": "0.5em",
                "line-height": "1.2em",
                "text-align": "center",
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                width: "400%"
            }), g.km(h.lastElementChild, "display", "none"), d ? (g.km(h, "padding-top", "0.6em"), g.km(f, "top", "0")) : (g.km(h, "padding-bottom", "0.6em"), g.km(f, "bottom", "0")));
            return h
        },
        x3 = function() {
            g.K.apply(this, arguments)
        },
        y3 = function(a, b, c, d, e) {
            g.gE.call(this, a, a + b, {
                priority: c,
                namespace: "captions"
            });
            this.id = d;
            this.params = e;
            this.j = []
        },
        hfb = function(a) {
            var b = "_" + z3++;
            return new y3(0, 0x8000000000000, 0, b, a)
        },
        A3 = function(a) {
            x3.call(this);
            this.C = a;
            this.pens = {};
            this.N = {};
            this.Z = {};
            this.D = "_" + z3++;
            this.K = {};
            this.B = this.j = null;
            this.G = !0
        },
        B3 = function(a, b) {
            a = a.getAttribute(b);
            if (a != null) return Number(a)
        },
        C3 = function(a, b) {
            a = a.getAttribute(b);
            if (a != null) return a === "1"
        },
        D3 = function(a, b) {
            a = B3(a, b);
            return a !== void 0 ? a : null
        },
        F3 = function(a, b) {
            a = a.getAttribute(b);
            if (a != null) return E3.test(a), a
        },
        zfb = function(a, b) {
            var c = {},
                d = b.getAttribute("ws");
            Object.assign(c, d ? a.Z[d] : a.C);
            a = D3(b, "mh");
            a != null && (c.rB = a);
            a = D3(b, "ju");
            a != null && (c.textAlign = a);
            a = D3(b, "pd");
            a != null && (c.Ni = a);
            a = D3(b, "sd");
            a != null && (c.UT = a);
            a = F3(b, "wfc");
            a != null && (c.windowColor = a);
            b = B3(b, "wfo");
            b !== void 0 && (c.windowOpacity = b / 255);
            return c
        },
        Afb = function(a, b) {
            var c = {},
                d = b.getAttribute("wp");
            d && Object.assign(c, a.N[d]);
            a = D3(b, "ap");
            a != null && (c.wm = a);
            a = B3(b, "cc");
            a != null && (c.Ht = a);
            a = B3(b, "ah");
            a != null && (c.zk = a);
            a = B3(b, "rc");
            a != null && (c.Is = a);
            b = B3(b, "av");
            b != null && (c.Zo = b);
            return c
        },
        Bfb = function(a, b, c, d) {
            var e = {};
            Object.assign(e, Afb(a, b));
            Object.assign(e, zfb(a, b));
            d ? g.Ic(e, a.C) ? (d = a.D, e = a.C) : d = "_" + z3++ : d = b.getAttribute("id") || "_" + z3++;
            a = B3(b, "t") + c;
            b = B3(b, "d") || 0x8000000000000;
            if (e.Ni === 2 || e.Ni === 3) c = e.Is, e.Is = e.Ht, e.Ht = c;
            return new y3(a, b, 0, d, e)
        },
        G3 = function(a) {
            x3.call(this);
            this.G = a;
            this.j = new Map;
            this.C = new Map;
            this.D = new Map;
            this.B = new Map
        },
        H3 = function(a) {
            a = g.Hd(Math.round(a), 0, 16777215).toString(16).toUpperCase();
            return "#000000".substr(0, 7 - a.length) + a
        },
        Cfb = function(a, b, c, d, e) {
            d === 0 && (d = 0x8000000000000);
            var f = {};
            b.wpWinPosId && Object.assign(f, a.C.get(b.wpWinPosId));
            b.wsWinStyleId && Object.assign(f, a.D.get(b.wsWinStyleId));
            a = b.rcRowCount;
            a !== void 0 && (f.Is = a);
            b = b.ccColCount;
            b !== void 0 && (f.Ht = b);
            if (f.Ni === 2 || f.Ni === 3) b = f.Is, f.Is = f.Ht, f.Ht = b;
            return new y3(c, d, 0, e, f)
        },
        I3 = function(a, b, c, d) {
            g.mU.call(this, a);
            this.videoData = b;
            this.audioTrack = c;
            this.Ua = d;
            this.G = b.dw
        },
        J3 = function(a, b, c, d, e, f, h, l, m, n) {
            n3.call(this, a, b, c, d, e, f, h, l, m, n);
            this.type = 1
        },
        K3 = function(a, b, c) {
            this.trackData = a;
            this.K = c;
            this.version = this.G = this.C = this.byteOffset = 0;
            this.j = new DataView(this.trackData);
            this.B = []
        },
        L3 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 1;
            return a.j.getUint8(b)
        },
        M3 = function(a) {
            var b = a.byteOffset;
            a.byteOffset += 4;
            return a.j.getUint32(b)
        },
        N3 = function(a, b) {
            x3.call(this);
            this.B = a;
            this.C = b;
            this.track = this.C.languageName === "CC3" ? 4 : 0;
            this.j = new Neb;
            this.j.B = 1 << this.track
        },
        Efb = function(a) {
            if (typeof a === "string") return !1;
            a = new K3(a, 8, 0);
            return Dfb(a)
        },
        Dfb = function(a) {
            if (!(a.byteOffset < a.j.byteLength) || M3(a) !== 1380139777) return !1;
            a.version = L3(a);
            if (a.version > 1) return !1;
            L3(a);
            L3(a);
            L3(a);
            return !0
        },
        O3 = function(a, b, c, d, e, f, h, l, m, n) {
            n3.call(this, a, b, c, d, e, f, h, l, m, n);
            var p = this;
            this.type = 2;
            this.Ca = [];
            this.qa = this.Y = this.Ra = 0;
            this.Ga = NaN;
            this.Nb = 0;
            this.qc = null;
            this.Wa = new g.fp(this.Dba, 433, this);
            this.G && (n.createClientVe(this.G, this, 167342), this.T(this.G, "click", function() {
                n.logClick(p.G)
            }), a = new g.HT(this.element, !0), g.Q(this, a), a.subscribe("hoverstart", function() {
                n.logVisibility(p.G, !0)
            }, this));
            g.np(this.element, "ytp-caption-window-rollup");
            g.Q(this, this.Wa);
            g.km(this.element, "overflow", "hidden")
        },
        Ffb = function(a, b) {
            if (!b) return "";
            a.C && a.B.params.UT !== 1 && (b *= -1);
            return "translate" + (a.C ? "X" : "Y") + "(" + b + "px)"
        },
        Gfb = function(a) {
            a.Ca = Array.from(document.getElementsByClassName("caption-visual-line"));
            for (var b = a.B.params.Is, c = 0, d = 0, e = a.Ca.length - 1; c < b && e > -1;) {
                var f = a.Ca[e];
                d += a.C ? f.offsetWidth : f.offsetHeight;
                c++;
                e--
            }
            a.Y = d;
            b = Math;
            c = b.max;
            isNaN(a.Ga) && ((d = a.j.Ht) ? (e = g.me("SPAN"), g.ue(e, "\u2013".repeat(d)), g.km(e, Ieb(a, a.j.Pe)), a.D.appendChild(e), a.Ga = e.offsetWidth, a.D.removeChild(e)) : a.Ga = 0);
            d = a.D;
            a.qa = c.call(b, a.Ga, a.Nb, (a.C ? d.offsetHeight : d.offsetWidth) + 1)
        },
        Hfb = function(a, b) {
            Gfb(a);
            var c = a.Ca.reduce(function(f, h) {
                return (a.C ? h.offsetWidth : h.offsetHeight) + f
            }, 0);
            c = a.Y - c;
            if (c !== a.Ra) {
                var d = c > 0 && a.Ra === 0,
                    e = c < a.Ra;
                b || isNaN(c) || d || !e || (g.np(a.element, "ytp-rollup-mode"), g.gp(a.Wa));
                g.km(a.D, "transform", Ffb(a, c));
                a.Ra = c
            }
            Gfb(a)
        },
        P3 = function() {
            x3.call(this)
        },
        Ifb = function(a, b, c, d, e, f, h, l, m) {
            switch (h.tagName) {
                case "b":
                    l.bold = !0;
                    break;
                case "i":
                    l.italic = !0;
                    break;
                case "u":
                    l.underline = !0
            }
            for (var n = 0; n < h.childNodes.length; n++) {
                var p = h.childNodes[n];
                if (p.nodeType === 3) p = new w3(b, c, d, e.id, p.nodeValue, f || n > 0, g.Gc(l) ? void 0 : l), m.push(p), e.j.push(p);
                else {
                    var q = {};
                    Object.assign(q, l);
                    Ifb(a, b, c, d, e, !0, p, q, m)
                }
            }
        },
        Jfb = function(a) {
            var b = a.split(":");
            a = 0;
            b = g.v(b);
            for (var c = b.next(); !c.done; c = b.next()) a = a * 60 + Number(c.value);
            return a * 1E3
        },
        Kfb = function(a, b, c, d) {
            d = Object.assign({
                rB: 0
            }, d);
            return new y3(a, b, c, "_" + z3++, d)
        },
        Q3 = function(a, b) {
            g.K.call(this);
            this.J = a;
            this.X = b;
            this.j = null;
            this.B = this.J.pA()
        },
        Lfb = function(a) {
            if (typeof a === "string" || Efb(a)) return a;
            var b = new DataView(a);
            if (b.byteLength <= 8 || b.getUint32(4) !== 1718909296) return "";
            b = g.bN(b, 0, 1835295092);
            if (!b || !b.size) return "";
            a = new Uint8Array(a, b.dataOffset, b.size - (b.dataOffset - b.offset));
            return g.fL(a)
        },
        Nfb = function(a, b, c) {
            if (typeof b === "string" || Efb(b)) return [{
                trackData: b,
                OT: c
            }];
            var d = new DataView(b);
            if (d.byteLength <= 8 || d.getUint32(4) !== 1718909296) return [];
            var e = g.TDa(d);
            if (a.B && e) {
                var f = g.LDa(e),
                    h = g.MDa(e);
                e = e.ej;
                f && e && a.B.VH(e, f, h)
            }
            a = g.kN(d, 1835295092);
            if (!a || !a.length || !a[0].size) return [];
            f = [];
            for (h = 0; h < a.length; h++) e = a[h], e = new Uint8Array(b, e.dataOffset, e.size - (e.dataOffset - e.offset)), e = g.fL(e), f.push({
                trackData: e,
                OT: c + h * 1E3
            });
            Mfb(d, f, c);
            return f = f.filter(function(l) {
                return !!l.trackData
            })
        },
        Mfb = function(a, b, c) {
            var d = g.bN(a, 0, 1836476516),
                e = 9E4;
            d && (e = g.cN(d) || 9E4);
            d = 0;
            for (var f = g.kN(a, 1836019558), h = 0; h < f.length; h++) {
                var l = f[h];
                h < b.length && (l = g.bN(a, l.dataOffset, 1953653094)) && (l = g.bN(a, l.dataOffset, 1952867444)) && (l = g.iN(l) / e * 1E3, h === 0 && (d = l), b[h].OT = l - d + c || c * h * 1E3)
            }
        },
        Ofb = function(a, b, c, d, e) {
            if (!Efb(c)) throw Error("Invalid binary caption track data");
            a.j || (a.j = new N3(e, b));
            return a.j.No(c, d)
        },
        Pfb = function(a, b, c) {
            a.j || (a.j = new P3);
            a = a.j.No(b, c);
            Math.random() < .01 && g.Kx(Error("Deprecated subtitles format in web player: WebVTT"));
            return a
        },
        Rfb = function(a, b, c, d) {
            if (c[0] === "{") try {
                return a.j || (a.j = new G3(Qfb(b))), a.j.No(c, d)
            } catch (f) {
                return g.Jx(f), []
            }
            var e = g.c1(c);
            if (!e || !e.firstChild) throw a = Error("Invalid caption track data"), a.params = c, a;
            if (e.firstChild.tagName === "timedtext") {
                if (Number(e.firstChild.getAttribute("format")) === 3) return a.j || (a.j = new A3(Qfb(b), a.X)), a.j.No(e, d);
                a = Error("Unsupported subtitles format in web player (Format2)");
                a.params = c;
                throw a;
            }
            if (e.firstChild.tagName === "transcript") throw a = Error("Unsupported subtitles format in web player (Format1)"), a.params = c, a;
            a = Error("Invalid caption track data");
            a.params = c;
            throw a;
        },
        Qfb = function(a) {
            var b = {};
            if (a = g.rQ(a)) b.lang = a, g.S$a.test(a) && (b.Ni = 1);
            return b
        },
        R3 = function(a) {
            g.jU.call(this, a);
            var b = this;
            this.J = a;
            this.X = this.J.U();
            this.videoData = this.J.getVideoData();
            this.Bb = this.J.qb();
            var c;
            this.fb = (c = this.J.getVideoData(1)) == null ? void 0 : g.fR(c);
            this.C = {
                Pe: {}
            };
            this.G = {
                Pe: {}
            };
            this.Fa = [];
            this.Ca = {};
            this.Va = {};
            this.Z = !1;
            this.Nb = g.QR(this.videoData);
            this.Xa = g.bPa(this.videoData, this.J);
            this.Kb = !!this.videoData.captionTracks.length;
            this.Tb = !!this.videoData.Ae;
            this.Wa = this.X.controlsType === "3";
            this.j = this.N = this.Y = this.Ra = this.rb = null;
            this.bb = new Q3(this.J, this.X);
            this.B = null;
            this.qa = new g.EF(this);
            this.K = new g.T({
                I: "div",
                S: "ytp-caption-window-container",
                W: {
                    id: "ytp-caption-window-container"
                }
            });
            this.ra = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 1,
                height: 1
            };
            c = null;
            var d = g.Qp("yt-html5-player-modules::subtitlesModuleData");
            d && (c = new g.Hp(d));
            this.storage = c;
            var e;
            this.Jb = !((e = a.Ke()) == null || !e.MH());
            this.D = Sfb(this);
            this.Ga = !this.D && this.Wa && this.Jb && this.Xa;
            g.Q(this, this.bb);
            this.D ? this.Na = this.Ka = null : (this.Ka = new g.ep(this.jU, void 0, this), g.Q(this, this.Ka), this.Na = new g.fp(this.eda, 2E3, this), g.Q(this,
                this.Na));
            g.Q(this, this.qa);
            g.KS(this.player, this.K.element, 4);
            g.Q(this, this.K);
            this.qa.T(a, "contentPoTokenReady", this.qG);
            this.D || this.qa.T(a, "resize", this.mU);
            (this.zb = g.JP(this.X) && !g.ht() && !this.J.isFullscreen() && !this.D && !this.Ga) && this.qa.T(a, "resize", this.Kaa);
            this.qa.T(a, "onPlaybackAudioChange", this.X$);
            this.qa.T(a, g.iE("captions"), function(f) {
                b.onCueRangeEnter(f)
            });
            this.qa.T(a, g.jE("captions"), function(f) {
                b.onCueRangeExit(f)
            });
            this.fb && this.qa.T(a, "videodatachange", function(f, h) {
                b.onVideoDataChange(f, h)
            });
            Tfb(this, ueb() || {});
            this.player.Ac("onCaptionsModuleAvailable")
        },
        Wfb = function(a) {
            if (a.X.Jb === 1 || a.videoData.TC === 1 || g.zR(a.videoData, "yt:cc") === "alwayson") return !0;
            if (a.videoData.captionTracks.length) var b = a.getAudioTrack().B;
            if (a.X.Jb === 2) {
                if (g.YP(a.X)) var c = Ufb(a);
                else if (a.storage) try {
                    c = a.storage.get("module-enabled")
                } catch (e) {
                    a.storage.remove("module-enabled")
                } else c = null;
                if (c != null) return !!c
            }
            c = neb(a.player.getAudioTrack(), g.YP(a.X));
            var d = g.zR(a.videoData, "yt:cc");
            if (Vfb(a) === void 0) {
                if (c === "CAPTIONS_INITIAL_STATE_ON_RECOMMENDED") return d ? d === "on" : !0;
                if (c === "CAPTIONS_INITIAL_STATE_OFF_RECOMMENDED") return d === "on"
            } else return d === "on";
            return b === "ON" || g.zR(a.videoData,
                "yt:cc") === "on"
        },
        S3 = function(a, b) {
            if (a.B && (b === void 0 || !b) || !a.videoData.captionTracks.length) return !1;
            a = a.getAudioTrack();
            return !!a.j || a.B === "FORCED_ON"
        },
        Vfb = function(a) {
            var b = void 0,
                c = g.Ht(g.Gt(), 65);
            if (g.YP(a.X) && c != null) {
                if (Ufb(a) != null) return !1;
                b = !c
            }
            return b
        },
        Xfb = function(a) {
            var b;
            a.Nb ? b = new I3(a.X, a.videoData, a.getAudioTrack(), a.player) : a.Xa ? b = new m3(a.videoData.j, a.player) : a.Kb ? b = new g.nU(a.X, a.videoData, a.getAudioTrack()) : b = new g.rU(a.X, a.videoData.Ae, a.videoData.videoId, g.RLa(a.videoData), a.videoData.Bn, a.videoData.eventId);
            return b
        },
        U3 = function(a, b) {
            if (a.j) {
                if (a.N && a.N.D) return a.N.D;
                g.LR(a.videoData) && (b = !0);
                b || (b = a.Tb ? !1 : a.Kb ? !1 : !0);
                b = b || Yfb(a);
                b = g.kU(a.j.B, b);
                var c = null;
                if (g.YP(a.X)) {
                    var d = a.J.isInline() ? void 0 : g.At("yt-player-caption-sticky-language");
                    for (var e = [d, a.videoData.captionsLanguagePreference, a.X.captionsLanguagePreference, g.zR(a.videoData, "yt:cc_default_lang")], f = !1, h = 0; h < e.length; h++) {
                        var l = e[h];
                        if (l) {
                            f = !0;
                            for (var m = 0; m < b.length; m++)
                                if (g.rQ(b[m]) === l) return b[m];
                            for (m = 0; m < b.length; m++)
                                if (g.rQ(b[m]).split("-")[0] === l.split("-")[0]) return b[m]
                        }
                    }
                    if (f && a.j && (e = a.j.G,
                            e.length))
                        for (e = g.v(e), f = e.next(); !f.done; f = e.next())
                            if (f = f.value, f.languageCode === d) {
                                c = f;
                                break
                            }
                } else
                    for (d = [a.videoData.captionsLanguagePreference, a.X.captionsLanguagePreference, g.zR(a.videoData, "yt:cc_default_lang")], e = 0; e < d.length; e++)
                        for (f = 0; f < b.length; f++)
                            if (g.rQ(b[f]) === d[e]) return b[f];
                d = null;
                a.N && a.N.C && (d = a.N.C);
                d || (d = b.find(function(n) {
                    return n.isDefault
                }) || null);
                d || (d = b[0] || T3(a));
                d && c && g.rQ(d).split("-")[0] !== c.languageCode.split("-")[0] && (d = oeb(d, c));
                return d
            }
            return null
        },
        T3 = function(a) {
            return a.N && a.N.j
        },
        V3 = function(a) {
            var b = T3(a);
            return !!b && a.B === b
        },
        Zfb = function(a) {
            var b = neb(a.player.getAudioTrack(), g.YP(a.X)),
                c;
            b === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? c = U3(a, a.Z) : b === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" && S3(a) ? c = T3(a) : Vfb(a) || a.Z || Wfb(a) ? c = U3(a, a.Z) : S3(a) && (c = T3(a));
            if (a.D || a.Ga) {
                var d = g.kU(a.j.B, !0);
                b = [];
                for (var e = 0; e < d.length; e++) {
                    var f = d[e],
                        h = g.me("TRACK");
                    h.setAttribute("kind", "subtitles");
                    h.setAttribute("label", g.pQ(f));
                    h.setAttribute("srclang", g.rQ(f));
                    h.setAttribute("id", f.toString());
                    a.Ga || h.setAttribute("src", a.j.ix(f, "vtt"));
                    f === c && h.setAttribute("default", "1");
                    b.push(h)
                }
                c = a.J.Ke();
                c.dE(b);
                c =
                    c.Ib();
                a.Jb && a.qa.T(c.textTracks, "change", a.kca)
            } else !a.B && c && W3(a, c), a.player.Ac("onCaptionsTrackListChanged"), a.player.Ym("onApiChange")
        },
        $fb = function(a, b) {
            var c = a.J.Ke().Ib().textTracks;
            a = a.B.toString();
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                e.id === a && (b ? e.mode !== "showing" && (e.mode = "showing") : e.mode === "showing" && (e.mode = "disabled"))
            }
        },
        W3 = function(a, b, c) {
            a.loaded && a.unload();
            c != null && (a.Z = c, a.Z && (g.YP(a.X) ? X3(a, !!b) : Y3(a, !!b)));
            a.X.L("html5_report_caption_format_change") && (c = a.B, a.Z ? c ? a.Ij(b, !!b, "m") : b && a.Ij(b, !0, "m") : !c && b && a.Ij(b, !0, "s"));
            a.B = b;
            S3(a) && (a.B = T3(a));
            var d;
            agb(a, (d = a.B) != null ? d : void 0);
            a.load()
        },
        cgb = function(a, b) {
            if (b instanceof y3) {
                var c = a.Ca[b.id];
                c && c.B !== b && (c.dispose(), delete a.Ca[b.id], c = null);
                c || (c = bgb(a, b)) && (a.Ca[b.id] = c)
            } else c = b.windowId, a.Va[c] || (a.Va[c] = []), a.Va[c].push(b)
        },
        bgb = function(a, b) {
            var c = dgb(a);
            if (!c) return null;
            var d = a.B ? g.rQ(a.B) : null;
            d && g.S$a.test(d) && (b.params.Ni = 1);
            var e = a.Bb.getPlayerSize();
            d = e.height * a.ra.height;
            e = e.width * a.ra.width;
            a.X.playerStyle !== "google-live" || a.C.isDefault || Object.assign(b.params, a.C);
            switch (b.params.rB != null ? b.params.rB : b.j.length > 1 ? 1 : 0) {
                case 1:
                    return new J3(b, a.C, a.G, c.width, c.height, e, d, a.X.experiments, a.ZM.bind(a), a.J);
                case 2:
                    return new O3(b, a.C, a.G, c.width, c.height, e, d, a.X.experiments, a.ZM.bind(a), a.J);
                default:
                    return new n3(b, a.C, a.G, c.width, c.height, e,
                        d, a.X.experiments, a.ZM.bind(a), a.J)
            }
        },
        Tfb = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            var d = Z3.Pe;
            a.C = {};
            Object.assign(a.C, Z3);
            a.C.Pe = {};
            Object.assign(a.C.Pe, d);
            a.G = {
                Pe: {}
            };
            var e = b.backgroundOverride ? a.G : a.C,
                f = b.background || d.background;
            E3.test(f);
            e.Pe.background = f;
            e = b.colorOverride ? a.G : a.C;
            f = b.color || d.color;
            E3.test(f);
            e.Pe.color = f;
            e = b.windowColorOverride ? a.G : a.C;
            f = b.windowColor || Z3.windowColor;
            E3.test(f);
            e.windowColor = f;
            e = b.backgroundOpacityOverride ? a.G : a.C;
            f = b.backgroundOpacity;
            f == null && (f = d.backgroundOpacity);
            e.Pe.backgroundOpacity = f;
            e = b.fontSizeIncrementOverride ? a.G : a.C;
            f = b.fontSizeIncrement;
            f == null && (f = d.fontSizeIncrement);
            e.Pe.fontSizeIncrement = f;
            f = b.fontStyleOverride ? a.G : a.C;
            e = b.fontStyle;
            e == null && (e = d.bold && d.italic ? 3 : d.bold ? 1 : d.italic ? 2 : 0);
            f = f.Pe;
            switch (e) {
                case 1:
                    f.bold = !0;
                    delete f.italic;
                    break;
                case 2:
                    delete f.bold;
                    f.italic = !0;
                    break;
                case 3:
                    f.bold = !0;
                    f.italic = !0;
                    break;
                default:
                    delete f.bold, delete f.italic
            }
            e = b.textOpacityOverride ? a.G : a.C;
            f = b.textOpacity;
            f == null && (f = d.textOpacity);
            e.Pe.textOpacity = f;
            e = b.windowOpacityOverride ? a.G : a.C;
            f = b.windowOpacity;
            f == null && (f = Z3.windowOpacity);
            e.windowOpacity =
                f;
            e = b.charEdgeStyleOverride ? a.G : a.C;
            f = b.charEdgeStyle;
            f == null && (f = d.charEdgeStyle);
            e.Pe.charEdgeStyle = f;
            e = b.fontFamilyOverride ? a.G : a.C;
            f = b.fontFamily;
            f == null && (f = d.fontFamily);
            e.Pe.fontFamily = f;
            a.loaded && a.mU();
            c && g.zt("yt-player-caption-display-settings", b, 2592E3)
        },
        fgb = function(a, b, c) {
            b && !a.Y ? (b = hfb({
                Ni: 0,
                lang: "en"
            }), a.Y = [b, new w3(b.start, b.end - b.start, 0, b.id, c != null ? c : "Captions look like this")], a.player.kf(a.Y)) : !b && a.Y && (egb(a, a.Y), a.Y = null)
        },
        egb = function(a, b) {
            a.player.Vo(b);
            b = g.v(b);
            for (var c = b.next(); !c.done; c = b.next()) g.ub(a.Fa, c.value);
            k3(a.Ka)
        },
        agb = function(a, b) {
            a.X.L("html5_modify_caption_vss_logging") && (a.videoData.JD = b)
        },
        dgb = function(a) {
            var b = a.Bb.getVideoContentRect(!0).height,
                c = a.Bb.getVideoContentRect(!0).width;
            if (!b || !c) return null;
            b *= a.ra.height;
            c *= a.ra.width;
            return {
                width: c,
                height: b
            }
        },
        Y3 = function(a, b) {
            if (a.storage) try {
                a.storage.set("module-enabled", b)
            } catch (c) {}
        },
        X3 = function(a, b) {
            a.J.isInline() || g.zt("yt-player-sticky-caption", b, 2592E3)
        },
        Ufb = function(a) {
            if (!a.J.isInline()) return g.At("yt-player-sticky-caption")
        },
        Sfb = function(a) {
            var b, c = !((b = a.J.Ke()) == null || !b.LH());
            return a.Wa && c && !a.Xa
        },
        Yfb = function(a) {
            return a.X.L("web_deprecate_always_includes_asr_setting") && g.YP(a.X) ? !0 : !!g.Ht(g.Gt(), 66)
        };
    g.ZW.prototype.ZE = g.da(47, function(a) {
        var b = 2;
        this.K.has(a) ? b = 0 : g.mVa(this, a) && (b = 1);
        return b
    });
    g.zZ.prototype.ZE = g.da(46, function(a) {
        return this.Wc.ZE(a)
    });
    g.ZW.prototype.VH = g.da(45, function(a, b, c) {
        this.Ka.set(a, {
            Nt: b,
            vz: c
        })
    });
    g.zZ.prototype.VH = g.da(44, function(a, b, c) {
        this.Wc.VH(a, b, c)
    });
    g.mU.prototype.DS = g.da(43, function() {
        return !1
    });
    g.mU.prototype.Ju = g.da(42, function() {});
    g.nU.prototype.Ju = g.da(41, function(a, b, c) {
        var d = this;
        this.Ma();
        b = this.ix(a, b);
        this.Xs();
        meb(this, b, {
            format: "RAW",
            onSuccess: function(e) {
                d.j = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.rU.prototype.Ju = g.da(40, function(a, b, c) {
        var d = this;
        this.Ma();
        b = this.ix(a, b);
        this.Xs();
        this.j = g.ps(b, {
            format: "RAW",
            onSuccess: function(e) {
                d.j = null;
                c(e.responseText, a)
            },
            withCredentials: !0
        })
    });
    g.PT.prototype.Iz = g.da(39, function() {
        for (var a = g.fe(document, "track", void 0, this.j), b = 0; b < a.length; b++) g.re(a[b])
    });
    g.DW.prototype.Iz = g.da(38, function() {
        this.mediaElement.Iz()
    });
    g.PT.prototype.MH = g.da(37, function() {
        return !(!this.j.textTracks || !this.j.textTracks.addEventListener)
    });
    g.DW.prototype.MH = g.da(36, function() {
        return this.mediaElement.MH()
    });
    g.PT.prototype.LH = g.da(35, function() {
        return !!this.j.textTracks
    });
    g.DW.prototype.LH = g.da(34, function() {
        return this.mediaElement.LH()
    });
    g.PT.prototype.dE = g.da(33, function(a) {
        for (var b = 0; b < a.length; b++) this.j.appendChild(a[b])
    });
    g.DW.prototype.dE = g.da(32, function(a) {
        this.mediaElement.dE(a)
    });
    g.jS.prototype.Ij = g.da(30, function(a, b, c) {
        var d = g.dS(this.app);
        d && d.Ij(a, b, c)
    });
    g.PZ.prototype.Ij = g.da(29, function(a, b, c) {
        if (this.Ra === "" || c !== "s") b = [a, b, this.Ra, c], g.OZ(this, g.SJ(this.provider), "cfs", b), this.Ra = a
    });
    g.b_.prototype.Ij = g.da(28, function(a, b, c) {
        this.qoe && this.qoe.Ij(a, b, c)
    });
    g.v_.prototype.Ij = g.da(27, function(a, b, c) {
        this.pc().Ij(a, b, c)
    });
    g.uZ.prototype.nF = g.da(18, function() {
        return this.K
    });
    g.G_.prototype.nF = g.da(17, function() {
        var a;
        return ((a = g.dS(this)) == null ? void 0 : a.pA()) || null
    });
    g.jS.prototype.pA = g.da(16, function() {
        return this.app.nF()
    });
    g.v_.prototype.pA = g.da(15, function() {
        var a;
        return ((a = this.ya) == null ? void 0 : a.nF()) || null
    });
    g.OM.prototype.YJ = g.da(1, function(a) {
        return (a = this.Rn(a)) ? a.j : 0
    });
    g.oO.prototype.YJ = g.da(0, function() {
        return 0
    });
    var seb = /#(.)(.)(.)/,
        reb = /^#(?:[0-9a-f]{3}){1,2}$/i,
        zeb = {
            aa: "Afar",
            ab: "Abkhazian",
            ace: "Acehnese",
            ach: "Acoli",
            ada: "Adangme",
            ady: "Adyghe",
            ae: "Avestan",
            aeb: "Tunisian Arabic",
            af: "Afrikaans",
            afh: "Afrihili",
            agq: "Aghem",
            ain: "Ainu",
            ak: "Akan",
            akk: "Akkadian",
            akz: "Alabama",
            ale: "Aleut",
            aln: "Gheg Albanian",
            alt: "Southern Altai",
            am: "Amharic",
            an: "Aragonese",
            ang: "Old English",
            anp: "Angika",
            ar: "Arabic",
            ar_001: "Arabic (world)",
            arc: "Aramaic",
            arn: "Mapuche",
            aro: "Araona",
            arp: "Arapaho",
            arq: "Algerian Arabic",
            ars: "Najdi Arabic",
            arw: "Arawak",
            ary: "Moroccan Arabic",
            arz: "Egyptian Arabic",
            as: "Assamese",
            asa: "Asu",
            ase: "American Sign Language",
            ast: "Asturian",
            av: "Avaric",
            avk: "Kotava",
            awa: "Awadhi",
            ay: "Aymara",
            az: "Azerbaijani",
            az_Cyrl: "Azerbaijani (Cyrillic)",
            az_Latn: "Azerbaijani (Latin)",
            ba: "Bashkir",
            bal: "Baluchi",
            ban: "Balinese",
            bar: "Bavarian",
            bas: "Basaa",
            bax: "Bamun",
            bbc: "Batak Toba",
            bbj: "Ghomala",
            be: "Belarusian",
            bej: "Beja",
            bem: "Bemba",
            bew: "Betawi",
            bez: "Bena",
            bfd: "Bafut",
            bfq: "Badaga",
            bg: "Bulgarian",
            bgc: "Haryanvi",
            bgn: "Western Balochi",
            bho: "Bhojpuri",
            bi: "Bislama",
            bik: "Bikol",
            bin: "Bini",
            bjn: "Banjar",
            bkm: "Kom",
            bla: "Siksik\u00e1",
            blo: "Anii",
            bm: "Bambara",
            bn: "Bangla",
            bo: "Tibetan",
            bpy: "Bishnupriya",
            bqi: "Bakhtiari",
            br: "Breton",
            bra: "Braj",
            brh: "Brahui",
            brx: "Bodo",
            bs: "Bosnian",
            bs_Cyrl: "Bosnian (Cyrillic)",
            bs_Latn: "Bosnian (Latin)",
            bss: "Akoose",
            bua: "Buriat",
            bug: "Buginese",
            bum: "Bulu",
            byn: "Blin",
            byv: "Medumba",
            ca: "Catalan",
            cad: "Caddo",
            car: "Carib",
            cay: "Cayuga",
            cch: "Atsam",
            ccp: "Chakma",
            ce: "Chechen",
            ceb: "Cebuano",
            cgg: "Chiga",
            ch: "Chamorro",
            chb: "Chibcha",
            chg: "Chagatai",
            chk: "Chuukese",
            chm: "Mari",
            chn: "Chinook Jargon",
            cho: "Choctaw",
            chp: "Chipewyan",
            chr: "Cherokee",
            chy: "Cheyenne",
            ckb: "Central Kurdish",
            co: "Corsican",
            cop: "Coptic",
            cps: "Capiznon",
            cr: "Cree",
            crh: "Crimean Tatar",
            cs: "Czech",
            csb: "Kashubian",
            csw: "Swampy Cree",
            cu: "Church Slavic",
            cv: "Chuvash",
            cy: "Welsh",
            da: "Danish",
            dak: "Dakota",
            dar: "Dargwa",
            dav: "Taita",
            de: "German",
            de_AT: "German (Austria)",
            de_CH: "German (Switzerland)",
            del: "Delaware",
            den: "Slave",
            dgr: "Dogrib",
            din: "Dinka",
            dje: "Zarma",
            doi: "Dogri",
            dsb: "Lower Sorbian",
            dua: "Duala",
            dum: "Middle Dutch",
            dv: "Divehi",
            dyo: "Jola-Fonyi",
            dyu: "Dyula",
            dz: "Dzongkha",
            dzg: "Dazaga",
            ebu: "Embu",
            ee: "Ewe",
            efi: "Efik",
            egy: "Ancient Egyptian",
            eka: "Ekajuk",
            el: "Greek",
            elx: "Elamite",
            en: "English",
            en_AU: "English (Australia)",
            en_CA: "English (Canada)",
            en_GB: "English (United Kingdom)",
            en_US: "English (United States)",
            enm: "Middle English",
            eo: "Esperanto",
            es: "Spanish",
            es_419: "Spanish (Latin America)",
            es_ES: "Spanish (Spain)",
            es_MX: "Spanish (Mexico)",
            et: "Estonian",
            eu: "Basque",
            ewo: "Ewondo",
            fa: "Persian",
            fa_AF: "Persian (Afghanistan)",
            fan: "Fang",
            fat: "Fanti",
            ff: "Fula",
            ff_Adlm: "Fula (Adlam)",
            ff_Latn: "Fula (Latin)",
            fi: "Finnish",
            fil: "Filipino",
            fj: "Fijian",
            fo: "Faroese",
            fon: "Fon",
            fr: "French",
            fr_CA: "French (Canada)",
            fr_CH: "French (Switzerland)",
            frm: "Middle French",
            fro: "Old French",
            frr: "Northern Frisian",
            frs: "Eastern Frisian",
            fur: "Friulian",
            fy: "Western Frisian",
            ga: "Irish",
            gaa: "Ga",
            gay: "Gayo",
            gba: "Gbaya",
            gd: "Scottish Gaelic",
            gez: "Geez",
            gil: "Gilbertese",
            gl: "Galician",
            gmh: "Middle High German",
            gn: "Guarani",
            goh: "Old High German",
            gon: "Gondi",
            gor: "Gorontalo",
            got: "Gothic",
            grb: "Grebo",
            grc: "Ancient Greek",
            gsw: "Swiss German",
            gu: "Gujarati",
            guz: "Gusii",
            gv: "Manx",
            gwi: "Gwich\u02bcin",
            ha: "Hausa",
            hai: "Haida",
            haw: "Hawaiian",
            he: "Hebrew",
            hi: "Hindi",
            hi_Latn: "Hindi (Latin)",
            hil: "Hiligaynon",
            hit: "Hittite",
            hmn: "Hmong",
            ho: "Hiri Motu",
            hr: "Croatian",
            hsb: "Upper Sorbian",
            ht: "Haitian Creole",
            hu: "Hungarian",
            hup: "Hupa",
            hy: "Armenian",
            hz: "Herero",
            ia: "Interlingua",
            iba: "Iban",
            ibb: "Ibibio",
            id: "Indonesian",
            ie: "Interlingue",
            ig: "Igbo",
            ii: "Sichuan Yi",
            ik: "Inupiaq",
            ilo: "Iloko",
            "in": "Indonesian",
            inh: "Ingush",
            io: "Ido",
            is: "Icelandic",
            it: "Italian",
            iu: "Inuktitut",
            iw: "Hebrew",
            ja: "Japanese",
            jbo: "Lojban",
            jgo: "Ngomba",
            jmc: "Machame",
            jpr: "Judeo-Persian",
            jrb: "Judeo-Arabic",
            jv: "Javanese",
            ka: "Georgian",
            kaa: "Kara-Kalpak",
            kab: "Kabyle",
            kac: "Kachin",
            kaj: "Jju",
            kam: "Kamba",
            kaw: "Kawi",
            kbd: "Kabardian",
            kbl: "Kanembu",
            kcg: "Tyap",
            kde: "Makonde",
            kea: "Kabuverdianu",
            kfo: "Koro",
            kg: "Kongo",
            kgp: "Kaingang",
            kha: "Khasi",
            kho: "Khotanese",
            khq: "Koyra Chiini",
            ki: "Kikuyu",
            kj: "Kuanyama",
            kk: "Kazakh",
            kkj: "Kako",
            kl: "Kalaallisut",
            kln: "Kalenjin",
            km: "Khmer",
            kmb: "Kimbundu",
            kn: "Kannada",
            ko: "Korean",
            kok: "Konkani",
            kos: "Kosraean",
            kpe: "Kpelle",
            kr: "Kanuri",
            krc: "Karachay-Balkar",
            krl: "Karelian",
            kru: "Kurukh",
            ks: "Kashmiri",
            ks_Arab: "Kashmiri (Arabic)",
            ks_Deva: "Kashmiri (Devanagari)",
            ksb: "Shambala",
            ksf: "Bafia",
            ksh: "Colognian",
            ku: "Kurdish",
            kum: "Kumyk",
            kut: "Kutenai",
            kv: "Komi",
            kw: "Cornish",
            kxv: "Kuvi",
            kxv_Deva: "Kuvi (Devanagari)",
            kxv_Latn: "Kuvi (Latin)",
            kxv_Orya: "Kuvi (Odia)",
            kxv_Telu: "Kuvi (Telugu)",
            ky: "Kyrgyz",
            la: "Latin",
            lad: "Ladino",
            lag: "Langi",
            lah: "Western Panjabi",
            lam: "Lamba",
            lb: "Luxembourgish",
            lez: "Lezghian",
            lg: "Ganda",
            li: "Limburgish",
            lij: "Ligurian",
            lkt: "Lakota",
            lmo: "Lombard",
            ln: "Lingala",
            lo: "Lao",
            lol: "Mongo",
            loz: "Lozi",
            lrc: "Northern Luri",
            lt: "Lithuanian",
            lu: "Luba-Katanga",
            lua: "Luba-Lulua",
            lui: "Luiseno",
            lun: "Lunda",
            luo: "Luo",
            lus: "Mizo",
            luy: "Luyia",
            lv: "Latvian",
            mad: "Madurese",
            maf: "Mafa",
            mag: "Magahi",
            mai: "Maithili",
            mak: "Makasar",
            man: "Mandingo",
            mas: "Masai",
            mde: "Maba",
            mdf: "Moksha",
            mdr: "Mandar",
            men: "Mende",
            mer: "Meru",
            mfe: "Morisyen",
            mg: "Malagasy",
            mga: "Middle Irish",
            mgh: "Makhuwa-Meetto",
            mgo: "Meta\u02bc",
            mh: "Marshallese",
            mi: "M\u0101ori",
            mic: "Mi'kmaw",
            min: "Minangkabau",
            mk: "Macedonian",
            ml: "Malayalam",
            mn: "Mongolian",
            mnc: "Manchu",
            mni: "Manipuri",
            mni_Beng: "Manipuri (Bangla)",
            mo: "Romanian",
            moh: "Mohawk",
            mos: "Mossi",
            mr: "Marathi",
            ms: "Malay",
            mt: "Maltese",
            mua: "Mundang",
            mul: "Multiple languages",
            mus: "Muscogee",
            mwl: "Mirandese",
            mwr: "Marwari",
            my: "Burmese",
            mye: "Myene",
            myv: "Erzya",
            mzn: "Mazanderani",
            na: "Nauru",
            nap: "Neapolitan",
            naq: "Nama",
            nb: "Norwegian Bokm\u00e5l",
            nd: "North Ndebele",
            nds: "Low German",
            nds_NL: "Low German (Netherlands)",
            ne: "Nepali",
            "new": "Newari",
            ng: "Ndonga",
            nia: "Nias",
            niu: "Niuean",
            nl: "Dutch",
            nl_BE: "Dutch (Belgium)",
            nmg: "Kwasio",
            nn: "Norwegian Nynorsk",
            nnh: "Ngiemboon",
            no: "Norwegian",
            nog: "Nogai",
            non: "Old Norse",
            nqo: "N\u2019Ko",
            nr: "South Ndebele",
            nso: "Northern Sotho",
            nus: "Nuer",
            nv: "Navajo",
            nwc: "Classical Newari",
            ny: "Nyanja",
            nym: "Nyamwezi",
            nyn: "Nyankole",
            nyo: "Nyoro",
            nzi: "Nzima",
            oc: "Occitan",
            oj: "Ojibwa",
            om: "Oromo",
            or: "Odia",
            os: "Ossetic",
            osa: "Osage",
            ota: "Ottoman Turkish",
            pa: "Punjabi",
            pa_Arab: "Punjabi (Arabic)",
            pa_Guru: "Punjabi (Gurmukhi)",
            pag: "Pangasinan",
            pal: "Pahlavi",
            pam: "Pampanga",
            pap: "Papiamento",
            pau: "Palauan",
            pcm: "Nigerian Pidgin",
            peo: "Old Persian",
            phn: "Phoenician",
            pi: "Pali",
            pl: "Polish",
            pon: "Pohnpeian",
            prg: "Prussian",
            pro: "Old Proven\u00e7al",
            ps: "Pashto",
            pt: "Portuguese",
            pt_BR: "Portuguese (Brazil)",
            pt_PT: "Portuguese (Portugal)",
            qu: "Quechua",
            raj: "Rajasthani",
            rap: "Rapanui",
            rar: "Rarotongan",
            rm: "Romansh",
            rn: "Rundi",
            ro: "Romanian",
            ro_MD: "Romanian (Moldova)",
            rof: "Rombo",
            rom: "Romany",
            ru: "Russian",
            rup: "Aromanian",
            rw: "Kinyarwanda",
            rwk: "Rwa",
            sa: "Sanskrit",
            sad: "Sandawe",
            sah: "Yakut",
            sam: "Samaritan Aramaic",
            saq: "Samburu",
            sas: "Sasak",
            sat: "Santali",
            sat_Olck: "Santali (Ol Chiki)",
            sba: "Ngambay",
            sbp: "Sangu",
            sc: "Sardinian",
            scn: "Sicilian",
            sco: "Scots",
            sd: "Sindhi",
            sd_Arab: "Sindhi (Arabic)",
            sd_Deva: "Sindhi (Devanagari)",
            se: "Northern Sami",
            see: "Seneca",
            seh: "Sena",
            sel: "Selkup",
            ses: "Koyraboro Senni",
            sg: "Sango",
            sga: "Old Irish",
            sh: "Serbo-Croatian",
            shi: "Tachelhit",
            shi_Latn: "Tachelhit (Latin)",
            shi_Tfng: "Tachelhit (Tifinagh)",
            shn: "Shan",
            shu: "Chadian Arabic",
            si: "Sinhala",
            sid: "Sidamo",
            sk: "Slovak",
            sl: "Slovenian",
            sm: "Samoan",
            sma: "Southern Sami",
            smj: "Lule Sami",
            smn: "Inari Sami",
            sms: "Skolt Sami",
            sn: "Shona",
            snk: "Soninke",
            so: "Somali",
            sog: "Sogdien",
            sq: "Albanian",
            sr: "Serbian",
            sr_Cyrl: "Serbian (Cyrillic)",
            sr_Latn: "Serbian (Latin)",
            srn: "Sranan Tongo",
            srr: "Serer",
            ss: "Swati",
            ssy: "Saho",
            st: "Southern Sotho",
            su: "Sundanese",
            su_Latn: "Sundanese (Latin)",
            suk: "Sukuma",
            sus: "Susu",
            sux: "Sumerian",
            sv: "Swedish",
            sw: "Swahili",
            sw_CD: "Swahili (Congo - Kinshasa)",
            swb: "Comorian",
            syc: "Classical Syriac",
            syr: "Syriac",
            szl: "Silesian",
            ta: "Tamil",
            te: "Telugu",
            tem: "Timne",
            teo: "Teso",
            ter: "Tereno",
            tet: "Tetum",
            tg: "Tajik",
            th: "Thai",
            ti: "Tigrinya",
            tig: "Tigre",
            tiv: "Tiv",
            tk: "Turkmen",
            tkl: "Tokelau",
            tl: "Tagalog",
            tlh: "Klingon",
            tli: "Tlingit",
            tmh: "Tamashek",
            tn: "Tswana",
            to: "Tongan",
            tog: "Nyasa Tonga",
            tok: "Toki Pona",
            tpi: "Tok Pisin",
            tr: "Turkish",
            trv: "Taroko",
            ts: "Tsonga",
            tsi: "Tsimshian",
            tt: "Tatar",
            tum: "Tumbuka",
            tvl: "Tuvalu",
            tw: "Twi",
            twq: "Tasawaq",
            ty: "Tahitian",
            tyv: "Tuvinian",
            tzm: "Central Atlas Tamazight",
            udm: "Udmurt",
            ug: "Uyghur",
            uga: "Ugaritic",
            uk: "Ukrainian",
            umb: "Umbundu",
            ur: "Urdu",
            uz: "Uzbek",
            uz_Arab: "Uzbek (Arabic)",
            uz_Cyrl: "Uzbek (Cyrillic)",
            uz_Latn: "Uzbek (Latin)",
            vai: "Vai",
            vai_Latn: "Vai (Latin)",
            vai_Vaii: "Vai (Vai)",
            ve: "Venda",
            vec: "Venetian",
            vi: "Vietnamese",
            vmw: "Makhuwa",
            vo: "Volap\u00fck",
            vot: "Votic",
            vun: "Vunjo",
            wa: "Walloon",
            wae: "Walser",
            wal: "Wolaytta",
            war: "Waray",
            was: "Washo",
            wo: "Wolof",
            xal: "Kalmyk",
            xh: "Xhosa",
            xnr: "Kangri",
            xog: "Soga",
            yao: "Yao",
            yap: "Yapese",
            yav: "Yangben",
            ybb: "Yemba",
            yi: "Yiddish",
            yo: "Yoruba",
            yrl: "Nheengatu",
            yue: "Cantonese",
            yue_Hans: "Cantonese (Simplified)",
            yue_Hant: "Cantonese (Traditional)",
            za: "Zhuang",
            zap: "Zapotec",
            zbl: "Blissymbols",
            zen: "Zenaga",
            zgh: "Standard Moroccan Tamazight",
            zh: "Chinese",
            zh_Hans: "Chinese (Simplified)",
            zh_Hant: "Chinese (Traditional)",
            zh_TW: "Chinese (Taiwan)",
            zu: "Zulu",
            zun: "Zuni",
            zxx: "No linguistic content",
            zza: "Zaza"
        };
    l3.prototype.contains = function(a) {
        a = g.Hb(this.segments, a);
        return a >= 0 || a < 0 && (-a - 1) % 2 === 1
    };
    l3.prototype.length = function() {
        return this.segments.length / 2
    };
    g.z(web, g.K);
    g.k = web.prototype;
    g.k.xa = function() {
        g.K.prototype.xa.call(this);
        this.C && this.C.cancel()
    };
    g.k.DB = function() {
        this.seekTo(this.player.getCurrentTime())
    };
    g.k.seekTo = function(a) {
        a -= this.player.Ec();
        var b = this.j;
        this.j = g.nb(this.qa.Nr(a).jb);
        b !== this.j && this.Y && this.Y()
    };
    g.k.reset = function() {
        this.D = new l3;
        this.K = -1;
        this.C && (this.C.cancel(), this.C = null)
    };
    g.k.XZ = function() {
        this.Ma();
        var a;
        if (a = this.j != null) a = this.j, a = a.j.ut(a);
        if (a && !this.C && !(this.j && this.j.startTime - this.player.getCurrentTime() > 30)) {
            a = this.j;
            a = a.j.vD(a);
            var b = a.jb[0],
                c;
            if ((c = this.player.getVideoData()) == null ? 0 : c.enableServerStitchedDai)
                if (c = this.player.pA()) {
                    var d = b.j.info.id,
                        e = b.Pa,
                        f = a.jb[0].Ve;
                    if (this.policy.Fa) {
                        if (c = c.bK(f, e, d, 3)) a.D = c
                    } else if (d = c.gA(f, e, d, 3))
                        if (c = c.ZE(e), c === 0) d && (a.j = new g.GM(d));
                        else if (c === 2) {
                        this.N.start();
                        xeb(this) && this.seekTo(this.player.getCurrentTime());
                        return
                    }
                }
            b.j.index.jo(b.Pa) ? (this.D.contains(a.jb[0].Pa) || yeb(this, a), this.j = g.nb(a.jb)) : xeb(this) && this.seekTo(this.player.getCurrentTime())
        }
        this.N.start()
    };
    g.z(m3, g.mU);
    g.k = m3.prototype;
    g.k.Ju = function(a, b, c) {
        var d = this;
        this.Xs();
        b = Beb(this, a.getId());
        b || (b = a.languageCode, b = this.j.isManifestless ? Ceb(this, b, "386") : Ceb(this, b));
        if (b) {
            var e = (b.index.YJ(b.index.Tn()) - b.index.getStartTime(b.index.Tn())) * 1E3,
                f = new g.YOa(this.X),
                h = function() {
                    d.C && d.C.reset();
                    d.K = !0
                };
            this.X.L("html5_keep_caption_data_after_seek") && (h = null);
            this.C = new web(f, this.J, b, function(l, m) {
                c(l, a, m, e)
            }, this.N || g.SF(b.info), h)
        }
    };
    g.k.DS = function() {
        var a = this.K;
        this.K = !1;
        return a
    };
    g.k.dB = function(a) {
        var b = this.N ? [new g.oQ({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC1",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        }), new g.oQ({
            id: "rawcc",
            languageCode: "rawcc",
            languageName: "CC3",
            is_servable: !0,
            is_default: !0,
            is_translateable: !1,
            vss_id: ".en"
        })] : this.j.isManifestless ? Aeb(this, "386") : Aeb(this);
        b = g.v(b);
        for (var c = b.next(); !c.done; c = b.next()) g.lU(this.B, c.value);
        a()
    };
    g.k.Xs = function() {
        this.C && (this.C.dispose(), this.C = null)
    };
    g.k.ix = function() {
        return ""
    };
    var E3 = /^#(?:[0-9a-f]{3}){1,2}$/i;
    var Geb = ["left", "right", "center", "justify"];
    g.z(n3, g.T);
    g.k = n3.prototype;
    g.k.s6 = function(a, b) {
        this.fb = a;
        this.rb = b;
        var c = g.um(this.element, this.element.parentElement);
        this.Bb = a - c.x;
        this.zb = b - c.y
    };
    g.k.r6 = function(a, b) {
        if (a !== this.fb || b !== this.rb) {
            g.mp(this.element, "ytp-dragging") || g.np(this.element, "ytp-dragging");
            var c = g.wm(this.element);
            a = a - this.Bb - .02 * this.playerWidth;
            var d = b - this.zb - .02 * this.playerHeight,
                e = (a + c.width / 2) / this.maxWidth * 3;
            e = Math.floor(g.Hd(e, 0, 2));
            var f = (d + c.height / 2) / this.maxHeight * 3;
            f = Math.floor(g.Hd(f, 0, 2));
            b = e + f * 3;
            a = (a + e / 2 * c.width) / this.maxWidth;
            a = g.Hd(a, 0, 1) * 100;
            c = (d + f / 2 * c.height) / this.maxHeight;
            c = g.Hd(c, 0, 1) * 100;
            this.B.params.wm = b;
            this.B.params.Zo = c;
            this.B.params.zk =
                a;
            this.B.params.isDefault = !1;
            this.j.wm = b;
            this.j.Zo = c;
            this.j.zk = a;
            this.j.isDefault = !1;
            this.ra.wm = b;
            this.ra.Zo = c;
            this.ra.zk = a;
            this.ra.isDefault = !1;
            this.A1()
        }
    };
    g.k.q6 = function() {
        g.pp(this.element, "ytp-dragging")
    };
    g.k.A1 = function() {
        this.tC(this.K)
    };
    g.k.getType = function() {
        return this.type
    };
    g.k.tC = function(a) {
        var b = this.Kb ? 0 : Math.min(this.lY(), this.maxWidth),
            c = this.kY(),
            d = this.Kb;
        if (d) {
            var e = getComputedStyle(this.D.parentNode);
            e = o3(e.borderLeftWidth) + o3(e.borderRightWidth) + o3(e.paddingLeft) + o3(e.paddingRight)
        } else e = 0;
        var f = e;
        e = "";
        this.B.params.Ni === 3 && (e = "rotate(180deg)");
        var h = d ? "calc(96% - " + f + "px)" : "96%";
        g.km(this.element, {
            top: 0,
            left: 0,
            right: "",
            bottom: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": h,
            "max-height": h,
            margin: "",
            transform: ""
        });
        this.eO(a);
        e = {
            transform: e,
            top: "",
            left: "",
            width: b ? b + "px" : "",
            height: c ? c + "px" : "",
            "max-width": "",
            "max-height": ""
        };
        var l = this.j.zk * .96 + 2;
        h = this.j.wm;
        switch (h) {
            case 0:
            case 3:
            case 6:
                (d = this.j.Pe.fontSizeIncrement) && d > 0 && this.j.Ni !== 2 && this.j.Ni !== 3 && (l = Math.max(l / (1 + d * 2), 2));
                e.left = l + "%";
                break;
            case 1:
            case 4:
            case 7:
                e.left = l + "%";
                l = this.D.offsetWidth;
                b || l ? (b = b || l + 1, e.width = b + "px", e["margin-left"] = d ? b / -2 - f / 2 + "px" : b / -2 + "px") : e.transform += " translateX(-50%)";
                break;
            case 2:
            case 5:
            case 8:
                e.right = 100 - l + "%"
        }
        d = this.j.Zo * .96 + 2;
        switch (h) {
            case 0:
            case 1:
            case 2:
                e.top =
                    d + "%";
                break;
            case 3:
            case 4:
            case 5:
                e.top = d + "%";
                (c = c || this.element.clientHeight) ? (e.height = c + "px", e["margin-top"] = c / -2 + "px") : e.transform += " translateY(-50%)";
                break;
            case 6:
            case 7:
            case 8:
                e.bottom = 100 - d + "%"
        }
        g.km(this.element, e);
        if (this.G) {
            c = this.D.offsetHeight;
            d = 1;
            for (b = 0; b < a.length; b++) e = a[b], typeof e.text === "string" && (d += e.text.split("\n").length - 1, e.append || b === 0 || d++);
            c /= d;
            this.G.style.height = c + "px";
            this.G.style.width = c + "px";
            this.element.style.paddingLeft = c + 5 + "px";
            this.element.style.paddingRight = c +
                5 + "px";
            a = Number(this.element.style.marginLeft.replace("px", "")) - c - 5;
            c = Number(this.element.style.marginRight.replace("px", "")) - c - 5;
            this.element.style.marginLeft = a + "px";
            this.element.style.marginRight = c + "px"
        }
    };
    g.k.eO = function(a) {
        var b;
        for (b = 0; b < a.length && a[b] === this.K[b]; b++);
        if (this.Fa || this.K.length > b) b = 0, this.Fa = !1, this.K = [], this.N = this.Na = this.Ka = null, g.pe(this.D);
        for (; b < a.length; b++) Leb(this, a[b])
    };
    g.k.lY = function() {
        return 0
    };
    g.k.kY = function() {
        return 0
    };
    g.k.toString = function() {
        return g.T.prototype.toString.call(this)
    };
    Neb.prototype.clear = function() {
        this.C = this.time = this.mode = 0;
        this.j = [];
        this.reset()
    };
    Neb.prototype.reset = function() {
        this.mode = 0;
        this.D.reset(0);
        this.G.reset(1)
    };
    var Oeb = [128, 1, 2, 131, 4, 133, 134, 7, 8, 137, 138, 11, 140, 13, 14, 143, 16, 145, 146, 19, 148, 21, 22, 151, 152, 25, 26, 155, 28, 157, 158, 31, 32, 161, 162, 35, 164, 37, 38, 167, 168, 41, 42, 171, 44, 173, 174, 47, 176, 49, 50, 179, 52, 181, 182, 55, 56, 185, 186, 59, 188, 61, 62, 191, 64, 193, 194, 67, 196, 69, 70, 199, 200, 73, 74, 203, 76, 205, 206, 79, 208, 81, 82, 211, 84, 213, 214, 87, 88, 217, 218, 91, 220, 93, 94, 223, 224, 97, 98, 227, 100, 229, 230, 103, 104, 233, 234, 107, 236, 109, 110, 239, 112, 241, 242, 115, 244, 117, 118, 247, 248, 121, 122, 251, 124, 253, 254, 127, 0, 129, 130, 3, 132, 5, 6, 135, 136, 9, 10, 139,
        12, 141, 142, 15, 144, 17, 18, 147, 20, 149, 150, 23, 24, 153, 154, 27, 156, 29, 30, 159, 160, 33, 34, 163, 36, 165, 166, 39, 40, 169, 170, 43, 172, 45, 46, 175, 48, 177, 178, 51, 180, 53, 54, 183, 184, 57, 58, 187, 60, 189, 190, 63, 192, 65, 66, 195, 68, 197, 198, 71, 72, 201, 202, 75, 204, 77, 78, 207, 80, 209, 210, 83, 212, 85, 86, 215, 216, 89, 90, 219, 92, 221, 222, 95, 96, 225, 226, 99, 228, 101, 102, 231, 232, 105, 106, 235, 108, 237, 238, 111, 240, 113, 114, 243, 116, 245, 246, 119, 120, 249, 250, 123, 252, 125, 126, 255
    ];
    p3.prototype.set = function(a) {
        this.type = a
    };
    p3.prototype.get = function() {
        return this.type
    };
    q3.prototype.clear = function() {
        this.state = 0
    };
    q3.prototype.update = function() {
        this.state = this.state === 2 ? 1 : 0
    };
    q3.prototype.ue = function() {
        return this.state !== 0
    };
    q3.prototype.matches = function(a, b) {
        return this.ue() && a === this.Gw && b === this.Ct
    };
    Teb.prototype.reset = function() {
        this.timestamp = this.j = 0
    };
    r3.prototype.updateTime = function(a) {
        for (var b = 1; b <= 15; ++b)
            for (var c = 1; c <= 32; ++c) this.B[b][c].timestamp = a
    };
    r3.prototype.debugString = function() {
        for (var a = "\n", b = 1; b <= 15; ++b) {
            for (var c = 1; c <= 32; ++c) {
                var d = this.B[b][c];
                a = d.j === 0 ? a + "_" : a + String.fromCharCode(d.j)
            }
            a += "\n"
        }
        return a
    };
    r3.prototype.reset = function(a) {
        for (var b = 0; b <= 15; b++)
            for (var c = 0; c <= 32; c++) this.B[b][c].reset();
        this.C = a;
        this.j = 0;
        this.col = this.row = 1
    };
    var Ueb = [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 225, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 233, 93, 237, 243, 250, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 231, 247, 209, 241, 9632],
        Veb = [174, 176, 189, 191, 8482, 162, 163, 9834, 224, 32, 232, 226, 234, 238, 244, 251],
        Web = [193, 201, 211, 218, 220, 252, 8216, 161, 42, 39, 9473, 169, 8480, 183, 8220, 8221, 192, 194, 199, 200, 202, 203, 235,
            206, 207, 239, 212, 217, 249, 219, 171, 187
        ],
        Xeb = [195, 227, 205, 204, 236, 210, 242, 213, 245, 123, 125, 92, 94, 95, 124, 126, 196, 228, 214, 246, 223, 165, 164, 9475, 197, 229, 216, 248, 9487, 9491, 9495, 9499];
    afb.prototype.reset = function(a, b) {
        this.G = b;
        this.style.set(2);
        this.B = this.K;
        this.D = this.N;
        this.j = this.B;
        var c = (a << 2) + (b << 1);
        this.K.reset(c);
        this.N.reset(c);
        this.text.reset((a << 2) + (b << 1) + 1)
    };
    Meb.prototype.reset = function(a) {
        this.G = a;
        this.B.clear();
        this.D = this.C;
        this.C.reset(a, 0);
        this.K.reset(a, 1)
    };
    efb.prototype.D = function() {};
    g.z(w3, g.gE);
    w3.prototype.toString = function() {
        return g.gE.prototype.toString.call(this)
    };
    g.z(x3, g.K);
    x3.prototype.No = function() {
        return []
    };
    x3.prototype.reset = function() {};
    g.z(y3, g.gE);
    y3.prototype.toString = function() {
        return g.gE.prototype.toString.call(this)
    };
    var z3 = 0;
    g.z(A3, x3);
    A3.prototype.reset = function() {
        this.K = {};
        this.B = this.j = null;
        this.G = !0
    };
    A3.prototype.No = function(a, b) {
        a = a.firstChild;
        a.getAttribute("format");
        b = b || 0;
        Number.isFinite(b);
        a = Array.from(a.childNodes);
        a = g.v(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value, c.nodeType === 1) switch (c.tagName) {
                case "head":
                    var d = c;
                    break;
                case "body":
                    var e = c
            }
        if (d)
            for (d = Array.from(d.childNodes), d = g.v(d), a = d.next(); !a.done; a = d.next())
                if (a = a.value, a.nodeType === 1) switch (a.tagName) {
                    case "pen":
                        c = a.getAttribute("id");
                        var f = this.pens,
                            h = {},
                            l = a.getAttribute("p");
                        l && Object.assign(h, this.pens[l]);
                        l = C3(a, "b");
                        l != null && (h.bold = l);
                        l = C3(a, "i");
                        l != null && (h.italic = l);
                        l = C3(a, "u");
                        l != null && (h.underline = l);
                        l = D3(a, "et");
                        l != null && (h.charEdgeStyle = l);
                        l = D3(a, "of");
                        l != null && (h.offset = l);
                        l = F3(a, "bc");
                        l != null && (h.background = l);
                        l = F3(a, "ec");
                        l != null && (h.yO = l);
                        l = F3(a, "fc");
                        l != null && (h.color = l);
                        l = D3(a, "fs");
                        l != null && l !== 0 && (h.fontFamily = l);
                        l = B3(a, "sz");
                        l !== void 0 && (h.fontSizeIncrement = l / 100 - 1);
                        l = B3(a, "bo");
                        l !== void 0 && (h.backgroundOpacity = l / 255);
                        l = B3(a, "fo");
                        l !== void 0 && (h.textOpacity = l / 255);
                        l = D3(a, "rb");
                        l != null && l !== 10 &&
                            l !== 0 && (h.fg = l > 10 ? l - 1 : l);
                        a = D3(a, "hg");
                        a != null && (h.gZ = a);
                        f[c] = h;
                        break;
                    case "ws":
                        c = a.getAttribute("id");
                        this.Z[c] = zfb(this, a);
                        break;
                    case "wp":
                        c = a.getAttribute("id"), this.N[c] = Afb(this, a)
                }
        if (e) {
            d = [];
            e = Array.from(e.childNodes);
            e = g.v(e);
            for (a = e.next(); !a.done; a = e.next())
                if (a = a.value, a.nodeType === 1) switch (a.tagName) {
                    case "w":
                        this.j = Bfb(this, a, b, !1);
                        (a = this.K[this.j.id]) && a.end > this.j.start && (a.end = this.j.start);
                        this.K[this.j.id] = this.j;
                        d.push(this.j);
                        break;
                    case "p":
                        var m = a;
                        l = b;
                        c = [];
                        f = m.getAttribute("w") ||
                            this.D;
                        h = !!C3(m, "a");
                        l = (B3(m, "t") || 0) + l;
                        var n = B3(m, "d") || 5E3;
                        h || (!this.G && this.B && this.B.windowId === f && this.B.end > l && (this.B.end = l), this.B && this.B.text === "\n" && (this.B.text = ""));
                        var p = h ? 6 : 5,
                            q = m.getAttribute("p");
                        q = q ? this.pens[q] : null;
                        var r = Array.from(m.childNodes);
                        r.length && (this.G = m.getAttribute("d") != null);
                        for (m = 0; m < r.length; m++) {
                            var t = r[m],
                                u = void 0;
                            m > 0 && (h = !0);
                            var x = void 0;
                            t.nodeType === 1 && (x = t);
                            if (x && x.tagName === "s") {
                                if ((t = (t = x.getAttribute("p")) ? this.pens[t] : null) && t.fg && (t.fg === 1 ? (t = r.slice(m,
                                        m + 4), t.length === 4 && (u = gfb(l, n, f, h, p, t, this.pens), m += 3)) : u = gfb(l, n, f, h, p, [x], this.pens)), !u) {
                                    var B = x;
                                    u = l;
                                    x = n;
                                    t = f;
                                    var E = h,
                                        F = p,
                                        I = B.textContent ? B.textContent : "",
                                        O = B.getAttribute("p");
                                    O = O ? this.pens[O] : null;
                                    B = B3(B, "t") || 0;
                                    u = new w3(u + B, x - B, F, t, I, E, O)
                                }
                            } else u = new w3(l, n, p, f, t.textContent || "", h, q);
                            c.push(u);
                            this.B = u
                        }
                        if (c.length > 0)
                            for (c[0].windowId === this.D && (this.j = Bfb(this, a, b, !0), d.push(this.j)), a = g.v(c), c = a.next(); !c.done; c = a.next()) c = c.value, c.windowId = this.j.id, this.j.j.push(c), d.push(c)
                }
            b = d
        } else b = [];
        return b
    };
    var ggb = new Map([
        [9, 1],
        [10, 1],
        [11, 2],
        [12, 3],
        [13, 4],
        [14, 5]
    ]);
    g.z(G3, x3);
    G3.prototype.reset = function() {
        this.B.clear()
    };
    G3.prototype.No = function(a, b) {
        var c = JSON.parse(a);
        if (!c) return [];
        if (c.pens) {
            a = 0;
            for (var d = g.v(c.pens), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = {},
                    h = e.pParentId;
                h && Object.assign(f, this.j.get(h));
                e.bAttr && (f.bold = !0);
                e.iAttr && (f.italic = !0);
                e.uAttr && (f.underline = !0);
                h = e.ofOffset;
                h != null && (f.offset = h);
                e.szPenSize !== void 0 && (f.fontSizeIncrement = e.szPenSize / 100 - 1);
                h = e.etEdgeType;
                h != null && (f.charEdgeStyle = h);
                e.ecEdgeColor !== void 0 && (f.yO = H3(e.ecEdgeColor));
                h = e.fsFontStyle;
                h != null && h !== 0 && (f.fontFamily =
                    h);
                e.fcForeColor !== void 0 && (f.color = H3(e.fcForeColor));
                e.foForeAlpha !== void 0 && (f.textOpacity = e.foForeAlpha / 255);
                e.bcBackColor !== void 0 && (f.background = H3(e.bcBackColor));
                e.boBackAlpha !== void 0 && (f.backgroundOpacity = e.boBackAlpha / 255);
                (h = e.rbRuby) && h !== 10 && (f.fg = h > 10 ? h - 1 : h, f.Xo = ggb.get(f.fg));
                e.hgHorizGroup && (f.gZ = e.hgHorizGroup);
                this.j.set(a++, f)
            }
        }
        if (c.wsWinStyles)
            for (a = 0, d = g.v(c.wsWinStyles), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wsParentId) ? Object.assign(f, this.D.get(h)) : Object.assign(f,
                this.G), e.mhModeHint !== void 0 && (f.rB = e.mhModeHint), e.juJustifCode !== void 0 && (f.textAlign = e.juJustifCode), e.pdPrintDir !== void 0 && (f.Ni = e.pdPrintDir), e.sdScrollDir !== void 0 && (f.UT = e.sdScrollDir), e.wfcWinFillColor !== void 0 && (f.windowColor = H3(e.wfcWinFillColor)), e.wfoWinFillAlpha !== void 0 && (f.windowOpacity = e.wfoWinFillAlpha / 255), this.D.set(a++, f);
        if (c.wpWinPositions)
            for (a = 0, d = g.v(c.wpWinPositions), e = d.next(); !e.done; e = d.next()) e = e.value, f = {}, (h = e.wpParentId) && Object.assign(f, this.C.get(h)), e.ahHorPos !==
                void 0 && (f.zk = e.ahHorPos), e.apPoint !== void 0 && (f.wm = e.apPoint), e.avVerPos !== void 0 && (f.Zo = e.avVerPos), e.ccCols !== void 0 && (f.Ht = e.ccCols), e.rcRows !== void 0 && (f.Is = e.rcRows), this.C.set(a++, f);
        if (c.events) {
            a = [];
            c = g.v(c.events);
            for (d = c.next(); !d.done; d = c.next()) {
                var l = d.value;
                e = (l.tStartMs || 0) + b;
                f = l.dDurationMs || 0;
                if (l.id) h = String(l.id), d = Cfb(this, l, e, f, h), a.push(d), this.B.set(h, d);
                else {
                    l.wWinId ? h = l.wWinId.toString() : (h = "_" + z3++, d = Cfb(this, l, e, f, h), a.push(d), this.B.set(h, d));
                    d = a;
                    var m = l;
                    f === 0 && (f = 5E3);
                    l = this.B.get(h);
                    var n = !!m.aAppend,
                        p = n ? 6 : 5,
                        q = m.segs,
                        r = null;
                    m.pPenId && (r = this.j.get(m.pPenId));
                    for (m = 0; m < q.length; m++) {
                        var t = q[m],
                            u = t.utf8;
                        if (u) {
                            var x = t.tOffsetMs || 0,
                                B = null;
                            t.pPenId && (B = this.j.get(t.pPenId));
                            if ((l.params.rB != null ? l.params.rB : l.j.length > 1 ? 1 : 0) === 2 && n && u === "\n") continue;
                            t = null;
                            var E = [],
                                F;
                            if (F = B && B.fg === 1) {
                                F = q;
                                var I = m;
                                if (I + 3 >= F.length || !F[I + 1].pPenId || !F[I + 2].pPenId || !F[I + 3].pPenId) F = !1;
                                else {
                                    var O = F[I + 1].pPenId;
                                    (O = this.j.get(O)) && O.fg && O.fg === 2 ? (O = F[I + 2].pPenId, O = this.j.get(O), !O || !O.fg ||
                                        O.fg < 3 ? F = !1 : (O = F[I + 3].pPenId, F = (O = this.j.get(O)) && O.fg && O.fg === 2 ? !0 : !1)) : F = !1
                                }
                            }
                            if (F) x = q[m + 1].utf8, t = q[m + 3].utf8, F = q[m + 2].utf8, I = this.j.get(q[m + 2].pPenId), u = ffb(u, x, F, t, I), t = new w3(e, f, p, h, u, n, B), m += 3;
                            else {
                                if (u.indexOf("<") > -1) {
                                    var N = void 0;
                                    E = B;
                                    F = r;
                                    I = e;
                                    O = f;
                                    var S = x,
                                        Y = p,
                                        la = n,
                                        oa = [],
                                        ba = g.c1("<html>" + u + "</html>");
                                    if (!ba.getElementsByTagName("parsererror").length && ((N = ba.firstChild) == null ? 0 : N.childNodes.length))
                                        for (N = g.v(ba.firstChild.childNodes), ba = N.next(); !ba.done; ba = N.next()) {
                                            ba = ba.value;
                                            var qa = void 0,
                                                P = void 0,
                                                wa = (P = (qa = ba.textContent) == null ? void 0 : qa.replace(/\n/g, "")) != null ? P : "";
                                            if (ba.nodeType !== 3 || wa && wa.match(/^ *$/) == null) {
                                                qa = {};
                                                Object.assign(qa, E || F);
                                                P = void 0;
                                                switch ((P = ba) == null ? void 0 : P.tagName) {
                                                    case "b":
                                                        qa.bold = !0;
                                                        break;
                                                    case "i":
                                                        qa.italic = !0;
                                                        break;
                                                    case "u":
                                                        qa.underline = !0
                                                }
                                                oa.push(new w3(I + S, O - S, Y, l.id, wa, la, qa))
                                            }
                                        }
                                    E = oa
                                }
                                E.length || (E = [new w3(e + x, f - x, p, l.id, u, n, B || r)])
                            }
                            if (E.length)
                                for (n = g.v(E), B = n.next(); !B.done; B = n.next()) B = B.value, d.push(B), l.j.push(B);
                            else t && (d.push(t), l.j.push(t))
                        }
                        n = !0
                    }
                }
            }
            b =
                a
        } else b = [];
        return b
    };
    g.z(I3, g.mU);
    I3.prototype.Ju = function(a, b, c) {
        qeb(this.videoData.videoId, a.vssId, c)
    };
    I3.prototype.dB = function(a) {
        if (this.audioTrack)
            for (var b = g.v(this.audioTrack.captionTracks), c = b.next(); !c.done; c = b.next()) g.lU(this.B, c.value);
        a()
    };
    g.z(J3, n3);
    J3.prototype.eO = function(a) {
        var b = this.B.j;
        n3.prototype.eO.call(this, a);
        for (a = a.length; a < b.length; a++) {
            var c = b[a];
            if (f && c.j === e) var d = f;
            else {
                d = {};
                Object.assign(d, c.j);
                Object.assign(d, hgb);
                var e = c.j;
                var f = d
            }
            Leb(this, c, d)
        }
    };
    var hgb = {
        C9: !0
    };
    g.z(K3, efb);
    K3.prototype.D = function(a, b, c, d, e) {
        if (c < d) {
            var f = "_" + z3++;
            c = c / 1E3 - this.K;
            d = d / 1E3 - this.K;
            a = new y3(c, d - c, 5, f, {
                textAlign: 0,
                wm: 0,
                zk: b * 2.5,
                Zo: a * 5.33
            });
            e = new w3(c, d - c, 5, f, e);
            this.B.push(a);
            this.B.push(e)
        }
    };
    g.z(N3, x3);
    N3.prototype.No = function(a) {
        a = new K3(a, a.byteLength, this.B);
        if (Dfb(a)) {
            for (; a.byteOffset < a.j.byteLength;)
                for (a.version === 0 ? a.C = M3(a) * (1E3 / 45) : a.version === 1 && (a.C = M3(a) * 4294967296 + M3(a)), a.G = L3(a); a.G > 0; a.G--) {
                    var b = L3(a),
                        c = L3(a),
                        d = L3(a);
                    b & 4 && (b & 3) === this.track && (this.track === 0 || this.track === 1) && (b = this.j, b.j.push({
                        time: a.C,
                        type: this.track,
                        hX: c,
                        iX: d,
                        order: b.j.length
                    }))
                }
            Seb(this.j, a);
            return a.B
        }
        return []
    };
    N3.prototype.reset = function() {
        this.j.clear()
    };
    g.z(O3, n3);
    g.k = O3.prototype;
    g.k.A1 = function() {
        g.hp(this.Wa)
    };
    g.k.Dba = function() {
        g.pp(this.element, "ytp-rollup-mode");
        this.tC(this.qc, !0)
    };
    g.k.kY = function() {
        return this.C ? this.qa : this.Y
    };
    g.k.lY = function() {
        return this.C ? this.Y : this.qa
    };
    g.k.tC = function(a, b) {
        this.qc = a;
        if (this.B.params.Is) {
            for (var c = 0, d = 0; d < this.K.length && c < a.length; d++) this.K[d] === a[c] && c++;
            c > 0 && c < a.length && (a = this.K.concat(a.slice(c)));
            this.Nb = this.qa;
            this.Y = this.qa = 0;
            n3.prototype.tC.call(this, a);
            Hfb(this, b)
        }
        n3.prototype.tC.call(this, a)
    };
    g.z(P3, x3);
    P3.prototype.No = function(a, b) {
        var c = [];
        a = a.split(igb);
        for (var d = 1; d < a.length; d++) {
            var e = a[d],
                f = b;
            if (e !== "" && !jgb.test(e)) {
                var h = kgb.exec(e);
                if (h && h.length >= 4) {
                    var l = Jfb(h[1]),
                        m = Jfb(h[2]) - l;
                    l += f;
                    var n = (h = h[3]) ? h.split(" ") : [];
                    h = {};
                    var p = null;
                    var q = "";
                    var r = null,
                        t = "";
                    n = g.v(n);
                    for (var u = n.next(); !u.done; u = n.next())
                        if (u = u.value.split(":"), u.length === 2) {
                            var x = u[1];
                            switch (u[0]) {
                                case "line":
                                    u = x.split(",");
                                    u[0].endsWith("%") && (p = u[0], h.Zo = Number.parseInt(p, 10), u.length === 2 && (q = u[1].trim()));
                                    break;
                                case "position":
                                    u =
                                        x.split(",");
                                    r = u[0];
                                    h.zk = Number.parseInt(r, 10);
                                    u.length === 2 && (t = u[1].trim());
                                    break;
                                case "align":
                                    switch (x) {
                                        case "start":
                                            h.textAlign = 0;
                                            break;
                                        case "middle":
                                            h.textAlign = 2;
                                            break;
                                        case "end":
                                            h.textAlign = 1
                                    }
                            }
                        }
                    p || q || (q = "end");
                    if (!r) switch (h.textAlign) {
                        case 0:
                            h.zk = 0;
                            break;
                        case 1:
                            h.zk = 100;
                            break;
                        case 2:
                            h.zk = 50
                    }
                    if (h.textAlign != null) {
                        p = 0;
                        switch (q) {
                            case "center":
                                p += 3;
                                break;
                            case "end":
                                p += 6;
                                break;
                            default:
                                p += 0
                        }
                        switch (t) {
                            case "line-left":
                                p += 0;
                                break;
                            case "center":
                                p += 1;
                                break;
                            case "line-right":
                                p += 2;
                                break;
                            default:
                                switch (h.textAlign) {
                                    case 0:
                                        p +=
                                            0;
                                        break;
                                    case 2:
                                        p += 1;
                                        break;
                                    case 1:
                                        p += 2
                                }
                        }
                        q = p < 0 || p > 8 ? 7 : p;
                        h.wm = q
                    }
                    e = e.substring(kgb.lastIndex).replace(/[\x01-\x09\x0b-\x1f]/g, "");
                    t = h;
                    h = e;
                    e = {};
                    if (h.indexOf("<") < 0 && h.indexOf("&") < 0) f = Kfb(l, m, 5, t), m = new w3(l, m, 5, f.id, h, !1, g.Gc(e) ? void 0 : e), c.push(f), c.push(m), f.j.push(m);
                    else
                        for (q = h.split(lgb), q.length === 1 ? (h = 5, t = Kfb(l, m, h, t)) : (p = h = 6, t = Object.assign({
                                Ht: 32
                            }, t), t = new y3(l, m, p, "_" + z3++, t)), c.push(t), p = l, r = 0; r < q.length; r++) n = q[r], r % 2 === 0 ? (u = g.c1("<html>" + n + "</html>"), u.getElementsByTagName("parsererror").length ?
                            (x = u.createElement("span"), x.appendChild(u.createTextNode(n))) : x = u.firstChild, Ifb(this, p, m - (p - l), h, t, r > 0, x, e, c)) : p = Jfb(n) + f
                }
                kgb.lastIndex = 0
            }
        }
        return c
    };
    var jgb = /^NOTE/,
        igb = /(?:\r\n|\r|\n){2,}/,
        kgb = RegExp("^((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})[\\t ]+--\x3e[\\t ]+((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})(?:[\\t ]*)(.*)(?:\\r\\n|\\r|\\n)", "gm"),
        lgb = RegExp("<((?:[\\d]{2}:)?[\\d]{2}:[\\d]{2}\\.[\\d]{3})>");
    g.EW.uK(P3, {
        No: "wvppt"
    });
    g.z(Q3, g.K);
    Q3.prototype.No = function(a, b, c, d) {
        c = c || 0;
        d = d || 0;
        if (this.B && a) {
            a: {
                var e = d,
                    f = Nfb(this, a, c),
                    h = [];
                try {
                    for (var l = g.v(f), m = l.next(); !m.done; m = l.next()) {
                        var n = m.value,
                            p = n.trackData,
                            q = n.OT;
                        h = typeof p !== "string" ? h.concat(Ofb(this, b, p, q, e)) : p.substring(0, 6) === "WEBVTT" ? h.concat(Pfb(this, p, q)) : h.concat(Rfb(this, b, p, q))
                    }
                    var r = h;
                    break a
                } catch (t) {
                    g.Jx(t);
                    this.clear();
                    r = [];
                    break a
                }
                r = void 0
            }
            if (r.length !== 0) return r
        }
        a = Lfb(a);
        if (!a) return [];
        try {
            return typeof a !== "string" ? Ofb(this, b, a, c, d) : a.substring(0, 6) === "WEBVTT" ?
                Pfb(this, a, c) : Rfb(this, b, a, c)
        } catch (t) {
            return g.Jx(t), this.clear(), []
        }
    };
    Q3.prototype.clear = function() {
        this.j && this.j.dispose();
        this.j = null
    };
    Q3.prototype.reset = function() {
        this.j && this.j.reset()
    };
    Q3.prototype.xa = function() {
        g.K.prototype.xa.call(this);
        this.clear()
    };
    var Z3 = {
        windowColor: "#080808",
        windowOpacity: 0,
        textAlign: 2,
        wm: 7,
        zk: 50,
        Zo: 100,
        isDefault: !0,
        Pe: {
            background: "#080808",
            backgroundOpacity: .75,
            charEdgeStyle: 0,
            color: "#fff",
            fontFamily: 4,
            fontSizeIncrement: 0,
            textOpacity: 1,
            offset: 1
        }
    };
    g.z(R3, g.jU);
    g.k = R3.prototype;
    g.k.xa = function() {
        if (this.D || this.Ga) {
            var a = this.J.Ke();
            a && !a.Ma() && a.Iz()
        } else fgb(this, !1);
        g.jU.prototype.xa.call(this)
    };
    g.k.DT = function() {
        return this.X.L("html5_honor_caption_availabilities_in_audio_track") && !this.Xa
    };
    g.k.uv = function() {
        if (this.Wa) return this.D || this.Ga;
        var a = this.getAudioTrack();
        if (this.DT()) {
            if (!a.captionTracks.length) return !1;
            if (!this.j) return !0
        }
        a = neb(a, g.YP(this.X));
        return a === "CAPTIONS_INITIAL_STATE_ON_REQUIRED" ? !0 : a === "CAPTIONS_INITIAL_STATE_OFF_REQUIRED" ? S3(this) : Vfb(this) || S3(this) ? !0 : Wfb(this)
    };
    g.k.load = function() {
        var a = this;
        g.jU.prototype.load.call(this);
        this.N = this.getAudioTrack();
        this.j ? this.B && (this.bb.clear(), this.D ? $fb(this, !0) : this.player.getPresentingPlayerType() !== 3 && this.j.Ju(this.B, "json3", function(b, c, d, e) {
            if (b) {
                var f;
                agb(a, (f = a.B) != null ? f : void 0);
                a.j.DS() && (a.Fa = [], a.J.qf("captions"), k3(a.Ka), a.bb.reset());
                if (a.videoData.Sf) {
                    var h;
                    d = ((h = d) != null ? h : 0) + a.videoData.Sf
                }
                b = a.bb.No(b, c, d, e);
                if (a.fb)
                    for (c = g.v(b), e = c.next(); !e.done; e = c.next()) e = e.value, e.C = a.videoData.clientPlaybackNonce,
                        e.Hl = a.videoData.Sf;
                c = !a.X.L("html5_keep_caption_data_after_seek") && a.Xa;
                a.player.kf(b, void 0, c);
                !a.Z || a.Ga || V3(a) || !a.X.lm || g.ED(a.X) || g.LP(a.X) || g.Lz(a.X) || a.X.Ka === "shortspage" || a.player.isInline() || (g.ip(a.Na), b = hfb({
                    wm: 0,
                    zk: 5,
                    Zo: 5,
                    Is: 2,
                    textAlign: 0,
                    Ni: 0,
                    lang: "en"
                }), a.Ra = [b], c = ["Click ", " for settings"], a.rb || (e = new g.my(g.Hy()), g.Q(a, e), a.rb = e.element), e = b.end - b.start, (f = g.pQ(a.B)) && a.Ra.push(new w3(b.start, e, 0, b.id, f)), a.Ra.push(new w3(b.start, e, 0, b.id, c[0]), new w3(b.start, e, 0, b.id, a.rb, !0),
                    new w3(b.start, e, 0, b.id, c[1], !0)), a.player.kf(a.Ra), g.gp(a.Na));
                !a.Z || a.Ga || V3(a) || (g.YP(a.X) ? X3(a, !0) : Y3(a, !0), a.N && (a.N.D = a.B), a.player.ip());
                a.Z = !1
            }
        }), this.D || this.Ga || V3(this) || this.player.Ac("captionschanged", g.qQ(this.B))) : (this.j = Xfb(this), g.Q(this, this.j), this.j.dB(function() {
            Zfb(a)
        }))
    };
    g.k.unload = function() {
        this.D && this.B ? $fb(this, !1) : (this.Na && g.ip(this.Na), this.player.qf("captions"), this.Fa = [], this.j && this.j.Xs(), this.bb.clear(), this.Y && this.player.kf(this.Y), this.mU());
        g.jU.prototype.unload.call(this);
        this.player.ip();
        this.player.Ac("captionschanged", {})
    };
    g.k.create = function() {
        this.uv() && this.load();
        var a;
        a: {
            var b, c, d;
            if (this.X.L("web_player_nitrate_promo_tooltip") && ((b = this.videoData.getPlayerResponse()) == null ? 0 : (c = b.captions) == null ? 0 : (d = c.playerCaptionsTracklistRenderer) == null ? 0 : d.enableTouchCaptionsNitrate)) {
                var e, f;
                if (b = (a = this.videoData.getPlayerResponse()) == null ? void 0 : (e = a.captions) == null ? void 0 : (f = e.playerCaptionsTracklistRenderer) == null ? void 0 : f.captionTracks)
                    for (a = g.v(b), e = a.next(); !e.done; e = a.next())
                        if (e = e.value, e.kind === "asr" && e.languageCode ===
                            "en") {
                            a = !0;
                            break a
                        }
            }
            a = !1
        }
        a && this.J.publish("showpromotooltip", this.K.element)
    };
    g.k.kca = function() {
        for (var a = this.J.Ke().Ib().textTracks, b = null, c = 0; c < a.length; c++)
            if (a[c].mode === "showing") a: {
                b = g.kU(this.j.B, !0);
                for (var d = 0; d < b.length; d++)
                    if (b[d].toString() === a[c].id) {
                        b = b[d];
                        break a
                    }
                b = null
            }(this.loaded ? this.B : null) !== b && W3(this, b, !0)
    };
    g.k.Hea = function() {
        !this.B && this.D || this.unload()
    };
    g.k.onCueRangeEnter = function(a) {
        this.Fa.push(a);
        k3(this.Ka)
    };
    g.k.onCueRangeExit = function(a) {
        g.ub(this.Fa, a);
        this.j instanceof m3 && this.j.N && this.player.Vo([a]);
        k3(this.Ka)
    };
    g.k.getCaptionWindowContainerId = function() {
        return this.K.element.id
    };
    g.k.eda = function() {
        egb(this, this.Ra);
        this.Ra = null
    };
    g.k.jU = function() {
        var a = this;
        if (!this.zb || !this.D) {
            this.Ka.stop();
            g.eba(this.Va);
            this.Fa.sort(g.hE);
            var b = this.Fa;
            if (this.Y) {
                var c = g.ln(b, function(f) {
                    return this.Y.indexOf(f) === -1
                }, this);
                c.length && (b = c)
            }
            b = g.v(b);
            for (c = b.next(); !c.done; c = b.next()) cgb(this, c.value);
            b = g.v(Object.entries(this.Ca));
            var d = b.next();
            for (c = {}; !d.done; c = {
                    FA: void 0,
                    Gp: void 0
                }, d = b.next()) {
                var e = g.v(d.value);
                d = e.next().value;
                e = e.next().value;
                c.FA = d;
                c.Gp = e;
                this.Va[c.FA] ? (c.Gp.element.parentNode || (c.Gp instanceof O3 || c.Gp instanceof J3 || g.zc(this.Ca, function(f) {
                    return function(h, l) {
                        l !== f.FA && h.B.params.wm === f.Gp.B.params.wm && h.B.params.zk === f.Gp.B.params.zk && h.B.params.Zo === f.Gp.B.params.Zo && (h.dispose(), delete a.Ca[l]);
                        return l === f.FA
                    }
                }(c), this), this.K.element.appendChild(c.Gp.element)), c.Gp.tC(this.Va[c.FA])) : (c.Gp.dispose(), delete this.Ca[c.FA])
            }
        }
    };
    g.k.kda = function() {
        Tfb(this, {}, !0);
        this.player.Ac("captionssettingschanged")
    };
    g.k.M8 = function() {
        var a = Z3.Pe;
        a = {
            background: a.background,
            backgroundOpacity: a.backgroundOpacity,
            charEdgeStyle: a.charEdgeStyle,
            color: a.color,
            fontFamily: a.fontFamily,
            fontSizeIncrement: a.fontSizeIncrement,
            fontStyle: a.bold && a.italic ? 3 : a.bold ? 1 : a.italic ? 2 : 0,
            textOpacity: a.textOpacity,
            windowColor: Z3.windowColor,
            windowOpacity: Z3.windowOpacity
        };
        var b = ueb() || {};
        b.background != null && (a.background = b.background);
        b.backgroundOverride != null && (a.backgroundOverride = b.backgroundOverride);
        b.backgroundOpacity != null && (a.backgroundOpacity =
            b.backgroundOpacity);
        b.backgroundOpacityOverride != null && (a.backgroundOpacityOverride = b.backgroundOpacityOverride);
        b.charEdgeStyle != null && (a.charEdgeStyle = b.charEdgeStyle);
        b.charEdgeStyleOverride != null && (a.charEdgeStyleOverride = b.charEdgeStyleOverride);
        b.color != null && (a.color = b.color);
        b.colorOverride != null && (a.colorOverride = b.colorOverride);
        b.fontFamily != null && (a.fontFamily = b.fontFamily);
        b.fontFamilyOverride != null && (a.fontFamilyOverride = b.fontFamilyOverride);
        b.fontSizeIncrement != null && (a.fontSizeIncrement =
            b.fontSizeIncrement);
        b.fontSizeIncrementOverride != null && (a.fontSizeIncrementOverride = b.fontSizeIncrementOverride);
        b.fontStyle != null && (a.fontStyle = b.fontStyle);
        b.fontStyleOverride != null && (a.fontStyleOverride = b.fontStyleOverride);
        b.textOpacity != null && (a.textOpacity = b.textOpacity);
        b.textOpacityOverride != null && (a.textOpacityOverride = b.textOpacityOverride);
        b.windowColor != null && (a.windowColor = b.windowColor);
        b.windowColorOverride != null && (a.windowColorOverride = b.windowColorOverride);
        b.windowOpacity != null &&
            (a.windowOpacity = b.windowOpacity);
        b.windowOpacityOverride != null && (a.windowOpacityOverride = b.windowOpacityOverride);
        return a
    };
    g.k.q3 = function(a, b) {
        var c = {};
        Object.assign(c, ueb());
        Object.assign(c, a);
        Tfb(this, c, b);
        this.player.Ac("captionssettingschanged")
    };
    g.k.mU = function() {
        !this.D && this.loaded && (g.vc(this.Ca, function(a, b) {
            a.dispose();
            delete this.Ca[b]
        }, this), this.jU())
    };
    g.k.Sh = function(a, b) {
        switch (a) {
            case "fontSize":
                if (isNaN(b)) break;
                var c = g.Hd(b, -2, 4);
                this.q3({
                    fontSizeIncrement: c
                });
                return c;
            case "reload":
                b && !this.D && W3(this, this.B, !0);
                break;
            case "stickyLoading":
                b !== void 0 && this.X.N && (g.YP(this.X) ? X3(this, !!b) : Y3(this, !!b));
                break;
            case "track":
                if (!this.j) return {};
                if (b) {
                    if (this.D) break;
                    if (!g.Ta(b)) break;
                    if (g.Gc(b)) {
                        W3(this, null, !0);
                        break
                    }
                    a = g.kU(this.j.B, !0);
                    for (var d = 0; d < a.length; d++) {
                        var e = a[d];
                        e.languageCode !== b.languageCode || c && (e.languageName !== b.languageName ||
                            (e.captionId || "") !== (b.captionId || "") || g.pQ(e) !== b.displayName) || (c = b.translationLanguage ? oeb(e, b.translationLanguage) : e)
                    }
                    this.OM(b.position);
                    !c || c === this.B && this.loaded || (b = g.dM(), a = g.rQ(c), b.length && a === b[b.length - 1] || (b.push(a), g.zt("yt-player-caption-language-preferences", b)), g.YP(this.X) && !this.J.isInline() && g.zt("yt-player-caption-sticky-language", a, 2592E3), W3(this, c, !0))
                } else return this.loaded && this.B && !V3(this) ? g.qQ(this.B) : {};
                return "";
            case "tracklist":
                return this.j ? g.Bl(g.kU(this.j.B, !(!b ||
                    !b.includeAsr)), function(f) {
                    return g.qQ(f)
                }) : [];
            case "translationLanguages":
                return this.j ? this.j.G.map(function(f) {
                    return Object.assign({}, f)
                }) : [];
            case "sampleSubtitles":
                this.D || b === void 0 || fgb(this, !!b);
                break;
            case "sampleSubtitlesCustomized":
                this.D || fgb(this, !!b, b);
                break;
            case "recommendedTranslationLanguages":
                return g.dM();
            case "defaultTranslationSourceTrackIndices":
                return this.j ? this.j.Z : []
        }
    };
    g.k.getOptions = function() {
        var a = "reload fontSize track tracklist translationLanguages sampleSubtitle".split(" ");
        this.X.N && a.push("stickyLoading");
        return a
    };
    g.k.Or = function() {
        var a = this.B;
        if (this.X.L("html5_cue_ranges_based_caption_vss") && !this.J.jK("captions")) return {};
        if (this.X.L("html5_modify_caption_vss_logging")) {
            var b;
            return (a = (b = this.videoData.JD) != null ? b : null) ? {
                cc: g.ZJa(a)
            } : {}
        }
        return a ? (b = a.vssId, a.translationLanguage && b && (b = "t" + b + "." + g.rQ(a)), {
            cc: b
        }) : {}
    };
    g.k.tea = function() {
        this.isSubtitlesOn() ? (g.YP(this.X) ? X3(this, !1) : Y3(this, !1), agb(this), this.X.L("html5_report_caption_format_change") ? W3(this, null, !0) : (this.unload(), S3(this, !0) && W3(this, T3(this), !1))) : this.M2()
    };
    g.k.M2 = function() {
        this.isSubtitlesOn() || W3(this, V3(this) || !this.B ? U3(this, !0) : this.B, !0)
    };
    g.k.isSubtitlesOn = function() {
        return !!this.loaded && !!this.B && !V3(this)
    };
    g.k.qG = function() {
        this.j && this.j.qG()
    };
    g.k.X$ = function() {
        var a = V3(this);
        S3(this, a) ? W3(this, this.getAudioTrack().j, !1) : this.videoData.captionTracks.length && (this.loaded && this.unload(), this.DT() && (this.Z = !1, this.B = null, this.j && (this.j.dispose(), this.j = null)), this.uv() && (a ? W3(this, U3(this), !1) : this.load()))
    };
    g.k.OM = function(a) {
        a && (this.ra = {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left,
            width: 1 - a.left - a.right,
            height: 1 - a.top - a.bottom
        }, this.K.element.style.top = this.ra.top * 100 + "%", this.K.element.style.left = this.ra.left * 100 + "%", this.K.element.style.width = this.ra.width * 100 + "%", this.K.element.style.height = this.ra.height * 100 + "%", this.K.element.style.position = "absolute", a = dgb(this)) && (this.K.element.style.width = a.width + "px", this.K.element.style.height = a.height + "px")
    };
    g.k.onVideoDataChange = function(a, b) {
        a === "newdata" && (this.videoData = b, this.loaded && this.unload(), this.Z = !1, this.B = null, this.j && (this.j.dispose(), this.j = null, this.player.Ac("captionschanged", {})), this.uv() && this.load())
    };
    g.k.getAudioTrack = function() {
        return this.fb && this.player.getPresentingPlayerType() === 2 ? this.videoData.Uk : this.player.getAudioTrack()
    };
    g.k.Kaa = function() {
        var a = this.J.Ke();
        a && !a.Ma() && a.Iz();
        this.J.isFullscreen() ? (this.D = this.Wa = !0, this.loaded && Zfb(this)) : (this.Wa = this.X.controlsType === "3", this.D = Sfb(this));
        W3(this, this.B)
    };
    g.k.ZM = function() {
        var a, b, c, d = (a = this.videoData.getPlayerResponse()) == null ? void 0 : (b = a.captions) == null ? void 0 : (c = b.playerCaptionsTracklistRenderer) == null ? void 0 : c.openTranscriptCommand;
        d && this.player.ib("innertubeCommand", d)
    };
    g.k.Ij = function(a, b, c) {
        var d = /&|,|:|;|(\n)|(\s)|(\/)|(\\)/gm,
            e = "";
        a && (e = a.vssId, e = e.replace(d, ""));
        var f = "";
        a && a.getId() && (f = a.getId() || "", f = f.replace(d, ""));
        a && a.getXtags() && (a = a.getXtags(), a = a.replace(d, ""), f = f.concat(";" + a));
        this.J.Ij(b ? e : "", b ? f : "", c)
    };
    g.EW.uK(R3, {
        jU: "smucd"
    });
    g.iU("captions", R3);
})(_yt_player);