(function(g) {
    var window = this;
    /*
     SPDX-License-Identifier: Apache-2.0
    */
    /*

     Copyright 2017 Google LLC
     SPDX-License-Identifier: BSD-3-Clause
    */
    'use strict';
    var mgb = function(a) {
            a.mutedAutoplay = !1;
            a.endSeconds = NaN;
            a.limitedPlaybackDurationInSeconds = NaN;
            g.WQ(a)
        },
        ngb = function(a) {
            g.Po(a);
            for (var b = 0; b < a.dg.length; b++) {
                var c = a.dg[b],
                    d = a.vy[b];
                if (d !== c.version) return !0;
                if (!g.Mo(c) || c.jl)
                    if (c.jl || c.JZ !== g.Ro)(c.Z0(c) || ngb(c)) && c.b1(c), c.jl = !1, c.JZ = g.Ro;
                if (d !== c.version) return !0
            }
            return !1
        },
        ogb = function(a) {
            g.Po(a);
            if (g.Mo(a))
                for (var b = 0; b < a.dg.length; b++) g.No(a.dg[b], a.Xm[b]);
            a.dg.length = a.vy.length = a.Xm.length = 0;
            a.Zi && (a.Zi.length = a.Iu.length = 0)
        },
        pgb = function(a, b, c) {
            function d(f) {
                e.Ez = f
            }
            var e = Object.create(g.M$a);
            c && (e.Kt = !0);
            e.Cm = a;
            e.schedule = b;
            a = {};
            e.aC = (a.notify = function() {
                return g.Oka(e)
            }, a.Js = function() {
                if (e.Cm !== null) {
                    if (g.Ko) throw Error("Schedulers cannot synchronously execute watches while scheduling.");
                    e.jl = !1;
                    if (!e.tF || ngb(e)) {
                        e.tF = !0;
                        var f = g.Lo(e);
                        try {
                            e.Ez(), e.Ez = g.So, e.Cm(d)
                        } finally {
                            g.Oo(e, f)
                        }
                    }
                }
            }, a.Kma = function() {
                return e.Ez()
            }, a.destroy = function() {
                if (e.Cm !== null || e.schedule !== null) ogb(e), e.Ez(), e.Cm = null, e.schedule = null, e.Ez = g.So
            }, a[g.Qo] = e, a);
            return e.aC
        },
        $3 = function(a, b) {
            a = g.Jo(a);
            try {
                return b()
            } finally {
                g.Jo(a)
            }
        },
        qgb = function() {
            return {
                I: "svg",
                W: {
                    height: "100%",
                    version: "1.1",
                    viewBox: "0 0 110 26",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    Hc: !0,
                    S: "ytp-svg-fill",
                    W: {
                        d: "M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"
                    }
                }]
            }
        },
        rgb = function() {
            return {
                I: "svg",
                W: {
                    fill: "none",
                    height: "100%",
                    viewBox: "0 0 143 51",
                    width: "100%"
                },
                V: [{
                    I: "path",
                    W: {
                        d: "M58.37 41.39H62.79V27.23C62.79 23.03 62.69 18.69 62.43 13.59H62.93L63.69 16.89L68.67 41.39H73.17L78.07 16.89L78.89 13.59H79.37C79.15 18.45 79.03 22.89 79.03 27.23V41.39H83.45V8.79H75.95L73.41 20.81C72.35 25.85 71.51 32.01 71.01 35.19H70.73C70.33 31.95 69.49 25.81 68.41 20.85L65.81 8.79H58.37V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M91.45 41.73C93.91 41.73 95.83 40.59 97.17 38.13H97.35L97.69 41.39H101.43V17.73H96.47V36.61C95.91 37.67 94.81 38.29 93.73 38.29C92.33 38.29 91.89 37.17 91.89 35.13V17.73H86.93V35.43C86.93 39.49 88.19 41.73 91.45 41.73Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M110.79 41.89C115.15 41.89 117.75 39.83 117.75 35.65C117.75 31.79 115.93 30.39 111.85 27.47C109.67 25.91 108.39 25.09 108.39 22.95C108.39 21.47 109.27 20.61 110.89 20.61C112.69 20.61 113.33 21.81 113.33 25.29L117.45 25.07C117.77 19.57 115.71 17.23 110.97 17.23C106.57 17.23 104.17 19.27 104.17 23.45C104.17 27.25 105.97 28.83 108.93 31.03C111.89 33.23 113.55 34.53 113.55 36.23C113.55 37.75 112.51 38.61 111.01 38.61C109.13 38.61 108.11 36.97 108.29 34.41L104.21 34.49C103.51 39.25 105.89 41.89 110.79 41.89Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M122.5 14.59C124.22 14.59 125.04 13.99 125.04 11.59C125.04 9.33 124.16 8.65 122.5 8.65C120.84 8.65 119.94 9.27 119.94 11.59C119.94 13.99 120.82 14.59 122.5 14.59ZM120.2 41.39H125V17.73H120.2V41.39Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        d: "M134.95 41.79C137.31 41.79 138.63 41.49 139.71 40.47C141.31 39.01 141.97 36.63 141.85 33.11L137.41 32.87C137.41 36.87 136.81 38.45 135.03 38.45C133.13 38.45 132.77 36.45 132.77 31.97V27.21C132.77 22.41 133.23 20.51 135.07 20.51C136.67 20.51 137.29 22.01 137.29 26.47L141.65 26.15C141.97 22.93 141.59 20.29 140.09 18.83C139.01 17.77 137.37 17.29 135.15 17.29C129.65 17.29 127.75 20.73 127.75 28.03V31.17C127.75 38.47 129.23 41.79 134.95 41.79Z",
                        fill: "white"
                    }
                }, {
                    I: "path",
                    W: {
                        "clip-rule": "evenodd",
                        d: "M24.99 49C29.74 49.00 34.38 47.59 38.32 44.95C42.27 42.32 45.35 38.57 47.17 34.18C48.98 29.80 49.46 24.97 48.53 20.32C47.61 15.66 45.32 11.38 41.97 8.03C38.61 4.67 34.33 2.38 29.68 1.46C25.02 .53 20.20 1.01 15.81 2.82C11.43 4.64 7.68 7.71 5.04 11.66C2.40 15.61 1 20.25 1 25C0.99 28.15 1.61 31.27 2.82 34.18C4.03 37.09 5.79 39.74 8.02 41.97C10.25 44.19 12.89 45.96 15.81 47.17C18.72 48.37 21.84 49 24.99 49ZM24.99 12.36C27.49 12.36 29.94 13.10 32.02 14.48C34.10 15.87 35.72 17.84 36.68 20.15C37.64 22.46 37.89 25.01 37.41 27.46C36.92 29.91 35.72 32.17 33.95 33.94C32.18 35.70 29.93 36.91 27.48 37.40C25.02 37.89 22.48 37.64 20.17 36.68C17.86 35.72 15.88 34.10 14.50 32.02C13.11 29.94 12.37 27.50 12.37 25C12.37 21.65 13.70 18.44 16.07 16.07C18.43 13.70 21.64 12.37 24.99 12.36ZM24.99 10.43C22.11 10.43 19.29 11.28 16.89 12.88C14.50 14.48 12.63 16.76 11.53 19.42C10.42 22.09 10.13 25.02 10.70 27.85C11.26 30.67 12.65 33.27 14.69 35.31C16.73 37.35 19.32 38.73 22.15 39.30C24.98 39.86 27.91 39.57 30.57 38.46C33.23 37.36 35.51 35.49 37.11 33.09C38.71 30.70 39.57 27.88 39.56 25C39.56 23.08 39.19 21.19 38.46 19.42C37.72 17.65 36.65 16.04 35.30 14.69C33.94 13.34 32.34 12.27 30.57 11.53C28.80 10.80 26.90 10.43 24.99 10.43ZM32.63 24.99L20.36 32.09V17.91L32.63 24.99Z",
                        fill: "white",
                        "fill-rule": "evenodd"
                    }
                }]
            }
        },
        sgb = function() {},
        a4 = function(a, b) {
            for (; a.length > b;) a.pop()
        },
        tgb = function(a) {
            a = Array(a);
            a4(a, 0);
            return a
        },
        ugb = function(a, b, c) {
            if (c == null) a.removeAttribute(b);
            else {
                var d = b.lastIndexOf("xml:", 0) === 0 ? "http://www.w3.org/XML/1998/namespace" : b.lastIndexOf("xlink:", 0) === 0 ? "http://www.w3.org/1999/xlink" : null;
                d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)
            }
        },
        wgb = function(a, b, c) {
            a = a.style;
            if (typeof c === "string") a.cssText = c;
            else {
                a.cssText = "";
                for (var d in c)
                    if (vgb.call(c, d)) {
                        b = a;
                        var e = d,
                            f = c[d];
                        e.indexOf("-") >= 0 ? b.setProperty(e, f) : b[e] = f
                    }
            }
        },
        xgb = function(a, b, c) {
            var d = typeof c;
            d === "object" || d === "function" ? a[b] = c : ugb(a, b, c)
        },
        ygb = function() {
            var a = new sgb;
            a.__default = xgb;
            a.style = wgb;
            return a
        },
        zgb = function(a, b, c, d) {
            (d[b] || d.__default)(a, b, c)
        },
        Agb = function(a) {
            this.created = [];
            this.j = [];
            this.node = a
        },
        Bgb = function(a, b) {
            this.j = null;
            this.B = a;
            this.key = b;
            this.text = void 0
        },
        Cgb = function(a, b, c) {
            b = new Bgb(b, c);
            return a.__incrementalDOMData = b
        },
        b4 = function(a, b) {
            if (a.__incrementalDOMData) return a.__incrementalDOMData;
            var c = a.nodeType === 1 ? a.localName : a.nodeName,
                d = a.nodeType === 1 ? a.getAttribute("key") : null;
            b = Cgb(a, c, a.nodeType === 1 ? d || b : null);
            if (a.nodeType === 1 && (a = a.attributes, c = a.length)) {
                d = b.j || (b.j = tgb(c * 2));
                for (var e = 0, f = 0; e < c; e += 1, f += 2) {
                    var h = a[e],
                        l = h.value;
                    d[f] = h.name;
                    d[f + 1] = l
                }
            }
            return b
        },
        Dgb = function(a, b, c, d, e) {
            return b == c && d == e
        },
        f4 = function(a) {
            for (var b = c4, c = d4(); c !== a;) {
                var d = c.nextSibling;
                b.removeChild(c);
                e4.j.push(c);
                c = d
            }
        },
        d4 = function() {
            return g4 ? g4.nextSibling : c4.firstChild
        },
        Egb = function(a, b) {
            g4 = d4();
            var c;
            a: {
                if (c = g4) {
                    do {
                        var d = c,
                            e = a,
                            f = b,
                            h = b4(d, f);
                        if (h4(d, e, h.B, f, h.key)) break a
                    } while (b && (c = c.nextSibling))
                }
                c = null
            }
            c || (a === "#text" ? (a = i4.createTextNode(""), Cgb(a, "#text", null)) : (c = i4, d = c4, typeof a === "function" ? c = new a : c = (d = a === "svg" ? "http://www.w3.org/2000/svg" : a === "math" ? "http://www.w3.org/1998/Math/MathML" : d == null || b4(d).B === "foreignObject" ? null : d.namespaceURI) ? c.createElementNS(d, a) : c.createElement(a), Cgb(c, a, b), a = c), e4.created.push(a), c = a);
            a = c;
            if (a !== g4) {
                if (j4.indexOf(a) >= 0)
                    for (b = c4, c = a.nextSibling,
                        d = g4; d !== null && d !== a;) e = d.nextSibling, b.insertBefore(d, c), d = e;
                else c4.insertBefore(a, g4);
                g4 = a
            }
        },
        Fgb = function(a, b) {
            Egb(a, b);
            c4 = g4;
            g4 = null;
            return c4
        },
        Hgb = function(a, b) {
            b = b === void 0 ? {} : b;
            var c = b.matches === void 0 ? Dgb : b.matches;
            return function(d, e, f) {
                var h = e4,
                    l = i4,
                    m = j4,
                    n = k4,
                    p = g4,
                    q = c4,
                    r = h4;
                i4 = d.ownerDocument;
                e4 = new Agb(d);
                h4 = c;
                k4 = [];
                g4 = null;
                var t = c4 = d.parentNode,
                    u, x = Ggb.call(d);
                if ((u = x.nodeType === 11 || x.nodeType === 9 ? x.activeElement : null) && d.contains(u)) {
                    for (x = []; u !== t;) x.push(u), u = u.parentNode || (t ? u.host : null);
                    t = x
                } else t = [];
                j4 = t;
                try {
                    return a(d, e, f)
                } finally {
                    d = e4, l4 && d.j.length > 0 && l4(d.j), i4 = l, e4 = h, h4 = r, k4 = n, g4 = p, c4 = q, j4 = m
                }
            }
        },
        Igb = function(a, b, c, d) {
            m4.push(zgb);
            m4.push(a);
            m4.push(b);
            m4.push(c);
            m4.push(d)
        },
        Jgb = function(a) {
            Egb("#text", null);
            var b = g4;
            var c = b4(b);
            if (c.text !== a) {
                c = c.text = a;
                for (var d = 1; d < arguments.length; d += 1) c = (0, arguments[d])(c);
                b.data !== c && (b.data = c)
            }
        },
        Kgb = function(a) {
            var b = a.component;
            var c = a.debugInstance;
            a = a.Cm;
            var d, e = (d = b.G7) != null ? d : b.name;
            n4.push({
                name: c ? e + " (" + c + ")" : e,
                QA: !!b.QA
            });
            b = a();
            n4.pop();
            return b
        },
        o4 = function() {
            var a = n4[n4.length - 1];
            return a ? a.QA || !1 : !1
        },
        p4 = function(a, b) {
            b = b === void 0 ? {} : b;
            var c = n4.length;
            b.stack && (n4 = [].concat(g.w(b.stack)));
            try {
                return a()
            } catch (d) {
                throw Lgb(d), d;
            } finally {
                a = n4.length - c, a > 0 && n4.splice(-a)
            }
        },
        Lgb = function(a) {
            var b = n4;
            if (b.length !== 0 && !a.dJ) {
                var c = b.slice(-20).reverse().map(function(d) {
                    return d.name
                }).join(" > ");
                c = a.message + "\n\nComponent stack: " + c;
                try {
                    a.dJ = b.slice(), q4.U7 && (a.stack && (a.stack = a.stack.replace(a.message, c)), a.message = c)
                } catch (d) {}
            }
        },
        s4 = function(a) {
            var b = r4;
            if (b && b !== Mgb && !b[Ngb]) {
                var c = n4.slice();
                b.AE || (b.AE = []);
                b.AE.push(function() {
                    return void p4(function() {
                        return void a()
                    }, {
                        stack: c
                    })
                })
            }
        },
        Pgb = function(a) {
            var b = r4;
            b && !b.Ma && (s4(function() {
                return void Ogb(a)
            }), a.parent = b)
        },
        Qgb = function(a) {
            a.AE && ($3(g.N$a, function() {
                for (var b = g.v(a.AE), c = b.next(); !c.done; c = b.next()) c = c.value, c()
            }), a.AE.length = 0)
        },
        Ogb = function(a) {
            if (!a.Ma) {
                a.Ma = !0;
                var b;
                (b = a[t4]) == null || b.call(a);
                delete a.parent;
                Qgb(a)
            }
        },
        u4 = function(a, b) {
            var c = r4;
            r4 = a;
            try {
                return b()
            } finally {
                r4 = c
            }
        },
        v4 = function(a) {
            var b = !!r4,
                c = {};
            (b === void 0 || b) && Pgb(c);
            u4(c, function() {
                return void a(c)
            });
            return function() {
                return void Ogb(c)
            }
        },
        Rgb = function(a) {
            for (var b = g.v(a), c = b.next(); !c.done; c = b.next()) c = c.value, a.delete(c), w4(c)
        },
        Sgb = function() {
            ogb(this);
            x4.delete(this);
            Ogb(this)
        },
        Tgb = function(a) {
            a.Ma || x4.add(a)
        },
        Ugb = function(a) {
            return g.H(function(b) {
                if (b.j == 1) return a.Ma ? b.return() : g.G(b, Promise.resolve(), 2);
                w4(a);
                g.va(b)
            })
        },
        w4 = function(a) {
            if (a.LS !== null && !a.Ma) {
                if (g.Ko) throw Error("Schedulers cannot synchronously execute effects while scheduling.");
                a.jl = !1;
                if (!a.tF || ngb(a)) {
                    a.tF = !0;
                    Vgb++;
                    Qgb(a);
                    var b = r4;
                    r4 = a;
                    var c = g.Lo(a);
                    try {
                        p4(a.LS, {
                            stack: a.dJ
                        })
                    } finally {
                        g.Oo(a, c), r4 = b
                    }
                }
            }
        },
        Wgb = function(a) {
            for (var b = g.v(a), c = b.next(); !c.done; c = b.next()) c = c.value, a.delete(c), c.Js()
        },
        Xgb = function(a) {
            a.Ma || y4.add(a)
        },
        Ygb = function(a) {
            return g.H(function(b) {
                if (b.j == 1) return a.Ma ? b.return() : g.G(b, Promise.resolve(), 2);
                a.Js();
                g.va(b)
            })
        },
        $gb = function(a, b, c) {
            function d() {
                return void p4(b, {
                    stack: e
                })
            }
            Zgb++;
            var e = n4.slice(),
                f = pgb(function() {
                    f.Ma || (Vgb++, Qgb(f), u4(f, d))
                }, function() {
                    return void a(f)
                }, c === void 0 ? !1 : c);
            f.DZ = !0;
            Pgb(f);
            f[t4] = function() {
                f.destroy();
                y4.delete(f)
            };
            return f
        },
        ahb = function(a, b, c, d) {
            d = d === void 0 ? !1 : d;
            q4.RM ? (Zgb++, b = Object.create(b), b.dJ = n4.slice(), b.LS = a, Pgb(b), a = b) : a = $gb(c, a, d);
            return a
        },
        chb = function(a) {
            a = ahb(a, bhb, Ygb);
            q4.RM ? Ugb(a) : Ygb(a)
        },
        fhb = function(a, b, c) {
            if (Object.hasOwnProperty.call(dhb, a) && (a = dhb[a], Object.hasOwnProperty.call(a, b) && (a = a[b], a instanceof Array))) {
                for (var d = null, e = !1, f = 0, h = a.length; f < h; ++f) {
                    var l = a[f],
                        m = l.Di;
                    if (!m) return l.zd;
                    d === null && (d = {});
                    m = Object.hasOwnProperty.call(d, m) ? d[m] : d[m] = c(m);
                    if (m === l.Mi) return l.zd;
                    m == null && (e = !0)
                }
                if (e) return null
            }
            b = ehb[b];
            return typeof b === "number" ? b : null
        },
        hhb = function(a, b, c) {
            if (c === null || c === void 0) return c;
            var d = fhb(a.tagName.toLowerCase(), b, function() {
                throw Error("Contingent attribute/property lookups are not supported.");
            });
            if (d === null) return c;
            d = ghb[d];
            var e;
            if ((e = d.Du) == null ? 0 : e.call(d, c)) {
                if (d.Ys) return d.Ys(c);
                throw Error("Value Handler's unwrap function does not exist.");
            }
            return d.Fr ? d.Fr(a.tagName, b, String(c)) : c
        },
        jhb = function(a) {
            function b(d, e, f) {
                g.Bl(d, ihb);
                for (var h = Math.min(e.length - f, d.length), l = 0; l < h; l++)
                    if (d[l] !== ihb(e[f + l])) return !1;
                return !0
            }
            a = String(a);
            for (var c = 0;
                (c = a.indexOf("<", c)) != -1;) {
                if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
                c += 1
            }
            return a
        },
        ihb = function(a) {
            return "A" <= a && a <= "Z" ? a.toLowerCase() : a
        },
        z4 = function(a, b, c) {
            if (c === !1 && khb.has(b)) ugb(a, b, null);
            else if (b !== "idomKey" && b !== "skip" && b !== "skipchildren" && b !== "children" && b !== "el") {
                if (b.startsWith("on"))
                    if (b[2] === ":") {
                        if (c === void 0 || c === null) {
                            var d;
                            (d = q4.vA) == null || d.call(q4, a.tagName, Error("The " + b + " attribute was set to undefined or null. This is not supported and may lead to unexpected behavior if an event handler is being conditionally set."));
                            a[b] = void 0;
                            return
                        }
                        if (typeof c !== "object" || c === null) throw Error("Expected " + b + " to be an EventHandler but its type was: " + (typeof c + ". Event handlers must be created using useHandler."));
                        if (typeof c.jY !== "function") throw Error("Expected the event handler for " + b + " to have a 'getFn' property but its keys were: " + (Object.keys(c) + ". Event handlers must be created using useHandler."));
                        var e = c.jY(0),
                            f = b.slice(3);
                        if ((d = o4()) && a["on" + f] === void 0) a.addEventListener(f, e), s4(function() {
                            return void a.removeEventListener(f, e)
                        });
                        else if (d || !lhb.includes(f)) a["on" + f] = e
                    } else {
                        mhb(a, b, c);
                        return
                    }
                else if (b.startsWith("data-") && typeof c === "string") try {
                    c = jhb(c)
                } catch (h) {
                    c = "zSoyz"
                }
                typeof c !== "function" || a._disposeEffects != null ? (q4.T7 && (c = hhb(a, b, c)), b === "style" ? nhb(a, b, c) : b.startsWith("prop:") ? a[b.slice(5)] = c : mhb(a, b, c)) : (a._signalProps || (a._signalProps = []), a._signalValues || (a._signalValues = []), a._signalProps.push(b))
            }
        },
        ohb = function(a, b, c) {
            c = (c === void 0 ? {} : c).QA;
            if (b == null ? 0 : b.el) {
                var d = b.el;
                if (typeof d === "function") d(a);
                else {
                    var e;
                    (e = d.yba) == null || e.call(d, a);
                    a._disposeRef || (a._disposeRef = function() {
                        var f;
                        (f = d.nca) == null || f.call(d);
                        delete a._disposeRef
                    }, c && s4(function() {
                        var f;
                        return void((f = a._disposeRef) == null ? void 0 : f.call(a))
                    }))
                }
            }
        },
        A4 = function(a) {
            this.props = a;
            this.C = !1
        },
        phb = function() {
            if (o4()) throw Error("Reactive components are not allowed to use useState or other memoization based hooks.");
            return B4
        },
        C4 = function(a) {
            A4.call(this, a);
            var b = this;
            this.AA = [];
            this.D = 0;
            this.G = v4(function(c) {
                b.qJ = c;
                s4(function() {
                    qhb(b, b.el)
                })
            })
        },
        qhb = function(a, b) {
            if (!a.C && b) {
                a.C = !0;
                try {
                    a.nJ()
                } catch (e) {
                    var c, d;
                    (d = q4.vA) == null || d.call(q4, (c = a.j) == null ? void 0 : c.qw, e)
                }
                D4.nJ(a);
                a.el = null;
                b.__instance && delete b.__instance
            }
        },
        rhb = function(a, b) {
            var c = g.Fa.apply(2, arguments),
                d;
            b = (d = b) != null ? d : {};
            d = {};
            return d.type = a, d.props = b, d.children = c, d[E4] = !0, d
        },
        F4 = function(a) {
            return a.children
        },
        H4 = function(a, b) {
            var c = G4;
            G4 = a;
            try {
                return b()
            } finally {
                G4 = c
            }
        },
        thb = function(a) {
            a = ahb(a, shb, Xgb, !0);
            q4.RM ? w4(a) : a.Js()
        },
        vhb = function(a) {
            a = ahb(a, uhb, Xgb);
            q4.RM ? w4(a) : a.Js()
        },
        I4 = function() {
            return document.createTextNode("")
        },
        J4 = function(a) {
            a = document.createTextNode(String(a));
            a._isSignalTextNode = !0;
            return a
        },
        K4 = function(a) {
            a = typeof a;
            return a === "string" || a === "number" || a === "boolean"
        },
        L4 = function(a) {
            return a instanceof g.md || a instanceof g.pd || a instanceof g.xd || !1
        },
        whb = function(a, b) {
            a.parentElement && a.parentElement.replaceChild(b, a);
            return b
        },
        xhb = function(a, b) {
            a.textContent !== String(b) && (a.textContent = String(b));
            return a
        },
        M4 = function(a, b) {
            var c = a[0].parentElement;
            if (c)
                if (a[0].previousSibling || a[a.length - 1].nextSibling) {
                    c.insertBefore(b, a[0]);
                    for (var d = a.length - 1; d >= 0; d--) c.removeChild(a[d])
                } else c.textContent = "", c.appendChild(b);
            return b
        },
        yhb = function(a, b) {
            if (a[0].parentElement)
                for (var c = a[0].parentElement, d = b.length, e = a.length, f = d, h = 0, l = 0, m = a[e - 1].nextSibling, n = null; h < e || l < f;)
                    if (a[h] === b[l]) h++, l++;
                    else {
                        for (; a[e - 1] === b[f - 1];) e--, f--;
                        if (e === h)
                            for (var p = f < d ? l ? b[l - 1].nextSibling : b[f - l] : m; l < f;) c.insertBefore(b[l++], p);
                        else if (f === l)
                            for (; h < e;) p = a[h], n && n.has(p) || c.removeChild(p), h++;
                        else if (a[h] === b[f - 1] && b[l] === a[e - 1]) p = a[--e].nextSibling, c.insertBefore(b[l++], a[h++].nextSibling), c.insertBefore(b[--f], p), a[e] = b[f];
                        else {
                            if (!n)
                                for (n = new Map, p = l; p < f;) n.set(b[p], p++);
                            p = n.get(a[h]);
                            if (p == null) c.removeChild(a[h]), h++;
                            else if (l < p && p < f) {
                                for (var q = h, r = 1, t = void 0; ++q < e && q < f && (t = n.get(a[q])) != null && t === p +
                                    r;) r++;
                                if (r > p - l)
                                    for (q = a[h]; l < p;) c.insertBefore(b[l++], q);
                                else c.replaceChild(b[l++], a[h++])
                            } else h++
                        }
                    }
            return b
        },
        N4 = function(a) {
            return g.Ta(a) ? "nodeType" in a : !1
        },
        Bhb = function(a) {
            var b = {}.Ema;
            var c = zhb();
            (b ? thb : vhb)(function() {
                var d = c[0],
                    e = c.Bm,
                    f = H4(O4, a);
                d = Ahb(d, f, c);
                Array.isArray(d) || (c.Bm = [d]);
                f = c.Bm;
                if (e && (!Array.isArray(e) || e.length !== 0)) {
                    e = Array.isArray(e) ? e[0] : e;
                    var h = e[P4],
                        l = e._disposeEffects;
                    e._disposeEffects = void 0;
                    e = Array.isArray(f) ? f[0] : f;
                    e[P4] = h;
                    e[P4] && (e[P4].J_ = e === f ? 1 : f.length);
                    e._disposeEffects = l
                }
                c[0] = d
            });
            return c
        },
        Ahb = function(a, b, c) {
            for (; typeof b === "function";) b = b();
            if (b != null && b[E4]) {
                var d;
                throw Error("Encountered a VNode when only real nodes are expected. Tag name: " + ((d = b.type) == null ? void 0 : d.qw));
            }
            if (a == null) return b == null ? I4() : K4(b) ? J4(b) : L4(b) ? J4(b.toString()) : N4(b) ? b : b.length === 0 ? I4() : Q4(b, c);
            if (N4(a)) {
                if (b == null) return whb(a, I4());
                if (K4(b)) return xhb(a, b);
                if (L4(b)) return xhb(a, b.toString());
                if (N4(b)) return whb(a, b);
                if (b.length === 0) return whb(a, I4());
                b = Q4(b, c);
                yhb([a], c.Bm);
                return b
            }
            a = R4(a);
            if (b == null) return M4(a, I4());
            if (K4(b)) return M4(a, J4(b));
            if (L4(b)) return M4(a,
                J4(b.toString()));
            if (N4(b)) return yhb(a, [b])[0];
            if (b.length === 0) return M4(a, I4());
            b = Q4(b, c);
            yhb(a, c.Bm);
            return b
        },
        R4 = function(a, b, c) {
            return Chb(a, b != null ? b : [], c === void 0 ? !1 : c)
        },
        Q4 = function(a, b) {
            var c = R4(a, void 0, !0);
            if (c.length === 0) return I4();
            b.Bm = c;
            return a
        },
        Chb = function(a, b, c, d, e) {
            b = b === void 0 ? [] : b;
            c = c === void 0 ? !1 : c;
            e = e === void 0 ? -1 : e;
            if (a == null) return b;
            K4(a) && (a = J4(a), d && c && (d[e] = a));
            L4(a) && (a = J4(a.toString()), d && c && (d[e] = a));
            isLegacyScript(a) && (a = J4(a.build()), d && c && (d[e] = a));
            if (N4(a)) return Dhb(b, a);
            if (Array.isArray(a)) {
                for (d = 0; d < a.length; d++) Chb(a[d], b, c, a, d);
                return b
            }
            if (typeof a === "function") return a = Bhb(a)[0], d && c && (d[e] = a), Dhb(b, a);
            if (a != null && a[E4]) {
                var f = a;
                a = H4(O4, function() {
                    return G4.apply(null, [f.type, f.props].concat(g.w(f.children)))
                });
                return Chb(a, b, c)
            }
            throw Error("Unrecognized JSXResult type in flattening.");
        },
        zhb = function(a) {
            var b = [];
            if (!a) return b.Bm = [], b;
            b[0] = Q4(a, b);
            return b
        },
        Dhb = function(a, b) {
            Array.isArray(a) ? a.push(b) : a.appendChild(b);
            return a
        },
        Ehb = function(a, b) {
            var c, d, e = v4(function(n) {
                d = n;
                c = H4(O4, function() {
                    return $3(g.O$a, function() {
                        return a(b)
                    })
                })
            });
            c != null && c.Bm || !Array.isArray(c) || (c = zhb(c));
            var f = c != null && c.Bm ? c.Bm : c;
            var h = Array.isArray(f) ? f[0] : f;
            if (h) {
                var l, m = (l = b == null ? void 0 : b.idomKey) != null ? l : a;
                l = a.n3;
                h._disposeEffects = e;
                e = h[P4] || {};
                Object.assign(e, {
                    key: m,
                    props: l ? b : void 0,
                    J_: f !== h ? f.length : 1,
                    context: d,
                    E9: !!h[P4],
                    n2: c != null && c.Bm ? c : e.n2
                });
                h[P4] = e
            } else e();
            u4(d, function() {});
            return c
        },
        Fhb = function(a, b) {
            a._disposeEffects == null && a._signalProps != null && (a._disposeEffects = v4(function() {
                vhb(function() {
                    for (var c = a._signalProps, d = a._signalValues, e = 0; e < c.length; e++) {
                        var f = c[e],
                            h = b[f]();
                        d[e] !== h && (d[e] = h, z4(a, f, h))
                    }
                })
            }))
        },
        Ghb = function(a, b) {
            a._disposeEffects = v4(function() {
                a._isSignalTextNode = !0;
                vhb(function() {
                    var c = b();
                    c == null && (c = "");
                    var d = typeof c;
                    if (d === "object" || d === "function") throw Error("Invalid text node kind: " + d + ". Text nodes must be primitives like numbers, strings, or null, but an object type was passed. See go/cow-errors#invalid-text-nodes for more information.");
                    a.textContent = String(c)
                })
            })
        },
        Jhb = function(a, b) {
            var c = g.Fa.apply(2, arguments);
            b != null || (b = {});
            if (a === F4) return c;
            if (typeof a === "function") return Kgb({
                component: a,
                debugInstance: b.debugInstance,
                Cm: function() {
                    c.length > 0 && (b.children = c.length === 1 ? c[0] : c);
                    var f = Hhb(a, b);
                    return f === !1 ? Ihb(a, b) : f
                }
            });
            var d = document.createElement(a),
                e;
            for (e in b) z4(d, e, b[e]);
            Fhb(d, b);
            R4(c, d);
            ohb(d, b, {
                QA: !0
            });
            return d
        },
        Hhb = function(a, b) {
            if (a.hoa || a.QA) return !1;
            b || (b = {});
            var c = new C4(b);
            c.B = a;
            var d = $3(g.O$a, function() {
                return c.Dy(b)
            });
            if (!(d instanceof HTMLElement)) return d;
            d.__instance = c;
            c.el = d;
            c.j = a;
            a.qw = d.tagName.toLowerCase();
            D4.wE(c);
            return d
        },
        Khb = function(a) {
            chb(function() {
                $3(null, a)
            })
        },
        Lhb = function(a) {
            if (a) {
                var b;
                (b = a._disposeRef) == null || b.call(a);
                var c;
                (c = a._disposeEffects) == null || c.call(a);
                a.__instance && a.__instance instanceof A4 && (b = a.__instance, qhb(b, a), b instanceof C4 && b.G());
                for (b = 0; b < a.childNodes.length; b++) Lhb(a.childNodes[b])
            }
        },
        Nhb = function(a) {
            Mhb.push(a) === 1 && requestAnimationFrame(function() {
                setTimeout(function() {
                    var b = [].concat(g.w(Mhb));
                    Mhb = [];
                    b = g.v(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        c = c.value;
                        try {
                            for (var d = 0; d < c.length; d++) Lhb(c[d])
                        } catch (e) {
                            d = c = void 0, (d = (c = q4).vA) == null || d.call(c, "unknown", e)
                        }
                    }
                })
            })
        },
        S4 = function(a, b) {
            return G4.apply(null, [a,
                b
            ].concat(g.w(g.Fa.apply(2, arguments))))
        },
        Ohb = function(a) {
            var b = null,
                c;
            return {
                value: null,
                yba: function(d) {
                    if (c && d !== c) {
                        var e;
                        (e = b) == null || e();
                        c._disposeRef = void 0
                    }
                    c = d;
                    b = a(d) || null
                },
                nca: function() {
                    var d;
                    (d = b) == null || d()
                }
            }
        },
        Phb = function(a) {
            var b = phb();
            if (b == null) throw Error("A valid hook context was not found. Please ensure you are using components from TSX and not invoking the component function directly");
            var c = b.D++;
            b.AA || (b.AA = []);
            var d = b.AA;
            d[c] || (d[c] = {
                key: a,
                host: b
            });
            if (a !== d[c].key) {
                var e, f;
                a = ((e = b.j) == null ? void 0 : e.name) || ((f = b.B) == null ? void 0 : f.name);
                throw Error("Hook called out of order in " + a + ". Hooks must be invoked unconditionally and in the same order every render. This could happen if you conditionally invoke a hook.");
            }
            return d[c]
        },
        Qhb = function(a, b) {
            return !a || a.length !== (b == null ? void 0 : b.length) || a.some(function(c, d) {
                return c !== b[d]
            })
        },
        Rhb = function(a, b) {
            var c = Phb("onChange"),
                d = phb();
            Qhb(c.dh, b) && (c.dh = b, c.F0 = a, d.qz || (d.qz = []), d.qz.push(c))
        },
        T4 = function(a, b) {
            Rhb(function() {
                return $3(null, a)
            }, b)
        },
        Shb = function(a) {
            o4() ? Khb(function() {
                $3(null, a)
            }) : Rhb(function() {
                return $3(null, a)
            }, [])
        },
        Uhb = function(a) {
            var b = [].concat(g.w(a));
            a.length = 0;
            a = g.v(b);
            for (b = a.next(); !b.done; b = a.next()) {
                b = b.value;
                Thb(b);
                var c = b.F0;
                b.F0 = null;
                if (c = c == null ? void 0 : c()) b.E0 = c
            }
        },
        Thb = function(a) {
            var b = a.E0;
            a.E0 = null;
            b == null || b()
        },
        U4 = function(a) {
            var b = [];
            if (o4()) return a();
            var c = Phb("useMemoInternal");
            Qhb(c.dh, b) && (c.dh = b, c.value = a());
            return c.value
        },
        V4 = function() {
            var a = U4(function() {
                return Ohb(function(b) {
                    a.value = b;
                    var c = $3(null, function() {});
                    return function() {
                        c == null || c();
                        a.value = null
                    }
                })
            });
            return a
        },
        Vhb = function(a) {
            var b = r4,
                c = n4.slice();
            return {
                jY: function() {
                    return function(d) {
                        b.Ma || p4(function() {
                            return a(d)
                        }, {
                            stack: c
                        }) !== !0 && d.stopPropagation()
                    }
                }
            }
        },
        Whb = function(a) {
            if (typeof a.children === "function") return a.children(), null;
            a = g.v(a.children);
            for (var b = a.next(); !b.done; b = a.next()) b = b.value, b();
            return null
        },
        Yhb = function(a, b, c) {
            c = c === void 0 ? !1 : c;
            p4(function() {
                return Xhb(a, b, c)
            })
        },
        Xhb = function(a, b, c) {
            c = ((c === void 0 ? 0 : c) ? Zhb : $hb)(a, function() {
                W4(b)
            });
            return c === null ? a : c
        },
        W4 = function(a) {
            if (a !== void 0 && a !== null)
                if (Array.isArray(a)) {
                    a = g.v(a);
                    for (var b = a.next(); !b.done; b = a.next()) W4(b.value)
                } else if (a instanceof g.md || a instanceof g.pd || a instanceof g.xd) Jgb(a.toString());
            else if (N4(a)) {
                if (d4() !== a) throw Error("Encountered a real dom node where a vdom node was expected. Real dom nodes should only come from the reactive renderer, and they can't be passed in JSX expressions directly. Tag name: " + a.tagName);
                g4 = d4()
            } else {
                var c = typeof a;
                if (c === "boolean" || c === "number" || c === "string") Jgb(a);
                else if (typeof a === "function") {
                    b = c4;
                    var d = d4();
                    if (!d ||
                        !d._isSignalTextNode) {
                        var e = b.insertBefore,
                            f = document.createTextNode("");
                        Ghb(f, a);
                        e.call(b, f, d)
                    }
                    g4 = d4()
                } else if (isLegacyScript(a)) Jgb(a.build(aib));
                else {
                    if (typeof a.type === "string") {
                        a.lr || Fgb(a.type, a.props.idomKey);
                        b = c4;
                        for (e in a.props) a.props[e] !== bib && (f = a.props[e], c = k4, c.push(e), c.push(f));
                        e = q4.attributes;
                        e = e === void 0 ? cib : e;
                        f = c4;
                        var h = b4(f);
                        c = e;
                        e = k4;
                        h = h.j || (h.j = tgb(e.length));
                        for (var l = !h.length || !1, m = 0; m < e.length; m += 2) {
                            var n = e[m];
                            if (l) h[m] = n;
                            else if (h[m] !== n) break;
                            var p = e[m + 1];
                            if (l || h[m + 1] !==
                                p) h[m + 1] = p, Igb(f, n, p, c)
                        }
                        if (m < e.length || m < h.length) {
                            for (m = l = m; m < h.length; m += 2) X4[h[m]] = h[m + 1];
                            for (m = l; m < e.length; m += 2) l = e[m], n = e[m + 1], X4[l] !== n && Igb(f, l, n, c), h[m] = l, h[m + 1] = n, delete X4[l];
                            a4(h, e.length);
                            for (d in X4) Igb(f, d, void 0, c), delete X4[d]
                        }
                        d = dib;
                        dib = f = m4.length;
                        for (c = d; c < f; c += 5)(0, m4[c])(m4[c + 1], m4[c + 2], m4[c + 3], m4[c + 4]);
                        dib = d;
                        a4(m4, d);
                        a4(e, 0);
                        Fhb(b, a.props);
                        (a.props.skip || a.props.skipchildren) && c4.hasChildNodes() ? g4 = c4.lastChild : (b.tagName.toLowerCase() === "script" && LEGACY_SCRIPT_LOADED && (aib =
                            createLegacyScriptCtx()), W4(a.children), aib = void 0);
                        f4(null);
                        g4 = c4;
                        c4 = c4.parentNode;
                        a.lr && (a.lr = !1);
                        ohb(b, a.props);
                        return b
                    }
                    if (a.type === F4) W4(a.children);
                    else if (!eib(a)) {
                        try {
                            fib(a)
                        } catch (q) {
                            d = q, (f = q4.vA) == null || f.call(q4, (b = a.type) == null ? void 0 : b.qw, d)
                        }
                        a.lr && (f4(null), g4 = c4, c4 = c4.parentNode, a.lr = !1)
                    }
                }
            }
        },
        gib = function(a, b) {
            var c;
            ((c = a.prototype) == null ? void 0 : c.Dy) === void 0 ? (b = new C4(b), b.B = a) : b = new a(b);
            b.j = a;
            b.QN = {
                uR: b.state,
                BZ: !1
            };
            return b
        },
        fib = function(a) {
            var b = a.type,
                c = b.qw;
            if (b === Whb) a.props.children = a.children, b(a.props);
            else {
                a.children.length > 0 && (a.props.children = a.children);
                var d;
                (d = a.props).idomKey || (d.idomKey = b);
                if (c) {
                    var e = Fgb(c, a.props.idomKey);
                    a.lr = !0;
                    var f = e.__instance
                }
                f || (f = gib(b, a.props), f.props = null, e && (e.__instance = f, f.el = e));
                var h;
                c = ((h = f.QN) != null ? h : {
                    uR: f.state,
                    BZ: !1
                }).uR;
                f.QN = void 0;
                b.z8 && (c = b.z8(a.props, c));
                f.props = a.props;
                f.state = c;
                h = function() {
                    var l = f;
                    D4.YW(l);
                    var m = l.Dy(l.props);
                    m ? (l.props.idomKey && (m.props.idomKey = l.props.idomKey), l = m) : l = void 0;
                    if (m = l)
                        if (m.lr = a.lr, l = W4(m), a.lr = m.lr, !b.qw)
                            if (l) b.qw = l.tagName.toLowerCase(), l.__instance = f, f.el = l;
                            else {
                                var n;
                                if ((n = f.AA) == null ? 0 : n.length) {
                                    var p;
                                    (p = q4.vA) == null || p.call(q4, "unknown", Error("A component used hooks, but failed to return a host element"))
                                }
                            }
                    f.wE();
                    D4.wE(f)
                };
                (c = f.B) ? Kgb({
                    component: c,
                    debugInstance: f.props.debugInstance,
                    Cm: h
                }): h()
            }
        },
        eib = function(a) {
            var b = a.type;
            if (!b.QA) return !1;
            a.props.children = a.children.length > 1 ? a.children : a.children[0];
            var c, d = (c = a.props.idomKey) != null ? c : a.type,
                e;
            if (d4() && ((e = d4()[P4]) == null ? void 0 : e.key) === d) {
                d = d4();
                c = d[P4];
                if (!c) throw Error("Reactive data has been lost on node. Tag name: " + d.tagName);
                if (!b.n3) {
                    var f;
                    (f = c.Gpa) == null || f.call(c, a.props);
                    hib(c);
                    return !0
                }
                f = r4;
                b = b.n3(a.props, c.props, f !== null ? f : c.context, c.E9);
                f = iib(b);
                jib(a.props, c.props);
                f > 0 ? W4(b) : g4 = d4();
                return !0
            }
            if (kib.has(b.name) && a.props.allowIdomInterop !== lib) throw Error(b.name +
                " can not be called from a IDOM component. See go/cow-errors#control-flow-component-called-from-Idom-Component");
            (b = Kgb({
                component: a.type,
                debugInstance: a.props.debugInstance,
                Cm: function() {
                    return Ihb(a.type, a.props)
                }
            })) && mib(b);
            return !0
        },
        iib = function(a) {
            if (a) {
                if (Array.isArray(a)) {
                    var b = 0;
                    a = g.v(a);
                    for (var c = a.next(); !c.done; c = a.next())(c = c.value) && (b = c.type === F4 ? b + c.children.length : b + 1);
                    return b
                }
                if (a.type === F4) return a.children.length
            } else return 0;
            return 1
        },
        jib = function(a, b) {
            b && (b.children = a.children, b.S7 = a.S7, b.fallback = a.fallback)
        },
        nib = function(a) {
            for (var b = 0; b < R4(a).length; b++) g4 = d4()
        },
        hib = function(a) {
            var b = oib();
            if (b) nib(b);
            else
                for (var c = 0; c < a.J_; c++)(b = oib()) ? nib(b) : g4 = d4()
        },
        oib = function() {
            var a;
            return (a = d4()[P4]) == null ? void 0 : a.n2
        },
        mib = function(a) {
            a = a != null && a.Bm ? a.Bm : a;
            a = Array.isArray(a) ? a : [a];
            a = g.v(a);
            for (var b = a.next(); !b.done; b = a.next()) c4.insertBefore(b.value, d4()), g4 = d4()
        },
        pib = function(a) {
            var b = phb(),
                c = U4(function() {
                    return {
                        value: typeof a === "function" ? a() : a
                    }
                });
            return [c.value, function(d) {
                if (B4 !== null) throw Error("Can't set state during rendering");
                c.value = typeof d === "function" ? d(c.value) : d;
                b.QN = {
                    uR: b.state,
                    BZ: !0
                };
                u4(b.qJ, function() {
                    H4(rhb, function() {
                        if (b.el) {
                            var e, f = {},
                                h = (f.props = b.props, f.type = b.j, f.children = (e = b.props.children) != null ? e : [], f[E4] = !0, f);
                            try {
                                Yhb(b.el, h, !0)
                            } catch (n) {
                                var l, m;
                                (m = q4.vA) == null || m.call(q4, (l = b.j) == null ? void 0 : l.qw, n)
                            }
                        }
                    })
                })
            }]
        },
        qib = function() {
            return U4(function() {
                return {
                    value: null
                }
            })
        },
        uib = function(a) {
            var b = rib;
            sib.push(a);
            tib || (b(function() {
                for (var c = g.v(sib), d = c.next(); !d.done; d = c.next()) d = d.value, d();
                sib.length = 0;
                tib = !1
            }), tib = !0)
        },
        rib = function(a) {
            Promise.resolve().then(a)
        },
        vib = function(a) {
            a = g.v(pib(a));
            var b = a.next().value,
                c = a.next().value;
            return [b, function(d) {
                uib(function() {
                    c(d)
                })
            }]
        },
        wib = function(a) {
            function b() {
                var l = a.J.Zc() ? "Hide more shorts" : "Hide more videos";
                e(l)
            }
            var c = g.v(pib("Hide more videos")),
                d = c.next().value,
                e = c.next().value;
            T4(function() {
                var l = a.J;
                l.addEventListener("videodatachange", b);
                return function() {
                    l.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            var f = U4(function() {
                    return (new g.my(g.Iy())).element
                }),
                h = V4();
            Shb(function() {
                h.value.appendChild(f)
            });
            return S4("button", {
                class: "ytp-button ytp-collapse",
                "aria-label": d,
                "on:click": Vhb(function() {
                    a.action && a.action()
                })
            }, S4("div", {
                class: "ytp-collapse-icon",
                el: h,
                skip: !0
            }))
        },
        xib = function(a) {
            function b() {
                var h = a.J.Zc() ? "More shorts" : "More videos";
                e(h)
            }
            var c = g.v(vib("More videos")),
                d = c.next().value,
                e = c.next().value,
                f = V4();
            T4(function() {
                a.aC && (a.aC.value = f.value)
            }, [a.aC]);
            T4(function() {
                var h = a.J;
                h.addEventListener("videodatachange", b);
                return function() {
                    h.removeEventListener("videodatachange", b)
                }
            }, [a.J]);
            return S4("button", {
                el: f,
                class: "ytp-button ytp-expand",
                "on:click": Vhb(function() {
                    a.action && a.action()
                })
            }, d)
        },
        yib = function(a, b) {
            var c = qib();
            T4(function() {
                var d = new g.e1(a);
                d.B = !0;
                c.value = d;
                return function() {
                    var e;
                    (e = c.value) == null || e.dispose()
                }
            }, [a,
                b
            ]);
            return c
        },
        zib = function(a) {
            function b(x) {
                a: {
                    var B = g.v([1,
                        16, 32
                    ]);
                    for (var E = B.next(); !E.done; E = B.next())
                        if (g.U(x, E.value)) {
                            B = !0;
                            break a
                        }
                    B = !1
                }
                if (!B) {
                    var F;
                    (F = p.value) != null && F.suggestionData.length > 0 && h(g.U(x, 4) && !g.U(x, 2) && !g.U(x, 1024))
                }
            }

            function c() {
                b(a.J.getPlayerStateObject())
            }

            function d(x) {
                b(x.state)
            }
            var e = g.v(vib(!1)),
                f = e.next().value,
                h = e.next().value,
                l = g.v(vib(!1));
            e = l.next().value;
            var m = l.next().value,
                n = V4(),
                p = yib(a.J, a.Ne),
                q = V4();
            l = qib();
            var r = qib();
            T4(function() {
                var x = a.J,
                    B = x.Zc() ? 157212 : 172777;
                r.value = new g.K;
                x.createClientVe(q.value, r.value, B);
                x.addEventListener("presentingplayerstatechange", d);
                x.addEventListener("videodatachange", c);
                B = x.U().controlsType === "0";
                g.rp(x.getRootNode(), "ytp-pause-overlay-controls-hidden", B);
                return function() {
                    x.removeEventListener("videodatachange", c);
                    x.removeEventListener("presentingplayerstatechange",
                        d);
                    var E;
                    (E = r.value) == null || E.dispose()
                }
            }, [a.J]);
            T4(function() {
                var x;
                (x = p.value) == null || x.Ja(n.value)
            }, [p]);
            var t = a.J;
            if (f)
                if (g.rp(t.getRootNode(), "ytp-expand-pause-overlay", !e), e) l.value.focus();
                else {
                    var u = p.value;
                    g.f1(u);
                    u.show();
                    q.value.focus()
                }
            q.value && t.logVisibility(q.value, f && !e);
            return S4("ytp-pause-overlay", {
                el: q,
                class: "ytp-pause-overlay",
                "aria-hidden": !f
            }, S4(wib, {
                J: a.J,
                Ne: a.Ne,
                action: function() {
                    m(!0)
                }
            }), S4(xib, {
                J: a.J,
                Ne: a.Ne,
                action: function() {
                    m(!1)
                },
                aC: l
            }), S4("div", {
                el: n,
                skip: !0
            }))
        },
        Aib = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-related-on-error-overlay"
            });
            var b = this;
            this.api = a;
            this.K = this.B = 0;
            this.G = new g.EF(this);
            this.j = [];
            this.suggestionData = [];
            this.columns = this.containerWidth = 0;
            this.title = new g.T({
                I: "h2",
                S: "ytp-related-title",
                va: "{{title}}"
            });
            this.previous = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-previous"],
                W: {
                    "aria-label": "Show previous suggested videos"
                },
                V: [g.yy()]
            });
            this.qa = new g.d1(function(f) {
                b.suggestions.element.scrollLeft = -f
            });
            this.D = this.C = 0;
            this.N = !0;
            this.next = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-next"],
                W: {
                    "aria-label": "Show more suggested videos"
                },
                V: [g.zy()]
            });
            g.Q(this, this.G);
            a = a.U();
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.np(this.element, "ytp-error-overlay-round-corners");
            this.Y = a.D;
            g.Q(this, this.title);
            this.title.Ja(this.element);
            this.suggestions = new g.T({
                I: "div",
                S: "ytp-suggestions"
            });
            g.Q(this, this.suggestions);
            this.suggestions.Ja(this.element);
            g.Q(this, this.previous);
            this.previous.Ja(this.element);
            this.previous.listen("click", this.s4, this);
            g.Q(this, this.qa);
            for (var c = {
                    EA: 0
                }; c.EA < 16; c = {
                    EA: c.EA
                }, c.EA++) {
                var d = new g.T({
                    I: "a",
                    S: "ytp-suggestion-link",
                    W: {
                        href: "{{link}}",
                        target: a.Y,
                        "aria-label": "{{aria_label}}"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-suggestion-image",
                        V: [{
                            I: "div",
                            W: {
                                "data-is-live": "{{is_live}}"
                            },
                            S: "ytp-suggestion-duration",
                            va: "{{duration}}"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-suggestion-title",
                        W: {
                            title: "{{hover_title}}"
                        },
                        va: "{{title}}"
                    }, {
                        I: "div",
                        S: "ytp-suggestion-author",
                        va: "{{views_or_author}}"
                    }]
                });
                g.Q(this, d);
                d.Ja(this.suggestions.element);
                var e = d.Ea("ytp-suggestion-link");
                g.km(e, "transitionDelay", c.EA / 20 + "s");
                this.G.T(e, "click", function(f) {
                    return function(h) {
                        var l = f.EA,
                            m = b.suggestionData[l],
                            n = m.sessionData;
                        g.EP(b.api.U()) && b.api.L("web_player_log_click_before_generating_ve_conversion_params") ? (b.api.logClick(b.j[l].element), l = m.xl(), m = {}, g.BMa(b.api, m, "emb_rel_err"), l = g.aj(l, m), g.bT(l, b.api, h)) : g.aT(h, b.api, b.Y, n || void 0) && b.api.mp(m.videoId, n, m.playlistId)
                    }
                }(c));
                this.j.push(d)
            }
            g.Q(this, this.next);
            this.next.Ja(this.element);
            this.next.listen("click", this.r4, this);
            this.G.T(this.api, "videodatachange", this.onVideoDataChange);
            this.resize(this.api.qb().getPlayerSize());
            this.onVideoDataChange();
            this.show()
        },
        Bib = function(a, b) {
            if (a.api.U().L("web_player_log_click_before_generating_ve_conversion_params"))
                for (var c = Math.floor(-a.C / (a.D + a.B)), d = Math.min(c + a.columns, a.suggestionData.length) - 1; c <= d; c++) a.api.logVisibility(a.j[c].element, b)
        },
        Cib = function(a) {
            a.next.element.style.bottom =
                a.K + "px";
            a.previous.element.style.bottom = a.K + "px";
            var b = a.C,
                c = a.containerWidth - a.suggestionData.length * (a.D + a.B);
            g.rp(a.element, "ytp-scroll-min", b >= 0);
            g.rp(a.element, "ytp-scroll-max", b <= c)
        },
        Dib = function(a) {
            for (var b = 0; b < a.suggestionData.length; b++) {
                var c = a.suggestionData[b],
                    d = a.j[b],
                    e = c.shortViewCount ? c.shortViewCount : c.author,
                    f = c.xl(),
                    h = a.api.U();
                if (g.EP(h) && !h.L("web_player_log_click_before_generating_ve_conversion_params")) {
                    var l = {};
                    g.$R(a.api, "addEmbedsConversionTrackingParams", [l]);
                    a.api.L("embeds_web_enable_referring_feature_deprecation") || g.YL(l, "emb_rel_err");
                    f = g.aj(f, l)
                }
                d.element.style.display = "";
                l = d.Ea("ytp-suggestion-title");
                g.vp.test(c.title) ? l.dir = "rtl" : g.R$a.test(c.title) && (l.dir = "ltr");
                l = d.Ea("ytp-suggestion-author");
                g.vp.test(e) ? l.dir = "rtl" : g.R$a.test(e) && (l.dir = "ltr");
                d.update({
                    views_or_author: e,
                    duration: c.isLivePlayback ? "Live" : c.lengthSeconds ? g.Cz(c.lengthSeconds) : "",
                    link: f,
                    hover_title: c.title,
                    title: c.title,
                    aria_label: c.ariaLabel || null,
                    is_live: c.isLivePlayback
                });
                e = d.Ea("ytp-suggestion-image");
                f = c.gh();
                e.style.backgroundImage = f ? "url(" + f + ")" : "";
                h.L("web_player_log_click_before_generating_ve_conversion_params") && (a.api.createServerVe(d.element, d), (c = (c = c.sessionData) && c.itct) && a.api.setTrackingParams(d.element, c))
            }
            for (; b < a.j.length; b++) a.j[b].element.style.display = "none";
            Cib(a)
        },
        Y4 = function(a) {
            g.MU.call(this, a);
            var b = this;
            this.j = null;
            var c = a.U(),
                d = {
                    target: c.Y
                },
                e = ["ytp-small-redirect"];
            c.C ? e.push("no-link") : (c = g.fQ(c), d.href = c, d["aria-label"] = "Visit YouTube to search for more videos");
            var f = new g.T({
                I: "a",
                La: e,
                W: d,
                V: [{
                    I: "svg",
                    W: {
                        fill: "#fff",
                        height: "100%",
                        viewBox: "0 0 24 24",
                        width: "100%"
                    },
                    V: [{
                        I: "path",
                        W: {
                            d: "M0 0h24v24H0V0z",
                            fill: "none"
                        }
                    }, {
                        I: "path",
                        W: {
                            d: "M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"
                        }
                    }]
                }]
            });
            f.Ja(this.element);
            a.createClientVe(f.element, this, 178053);
            this.T(f.element, "click", function(h) {
                Eib(b, h, f.element)
            });
            g.Q(this, f);
            a.U().C || (this.j = new Aib(a), this.j.Ja(this.element), g.Q(this, this.j));
            this.T(a, "videodatachange", function() {
                b.show()
            });
            this.resize(this.api.qb().getPlayerSize())
        },
        Eib = function(a, b, c) {
            b.preventDefault();
            a.api.logClick(c);
            b = c.getAttribute("href");
            c = {};
            g.$R(a.api, "addEmbedsConversionTrackingParams", [c]);
            b = g.Gc(c) ? b : g.aj(b, c);
            g.Qd(b)
        },
        Fib = function(a, b) {
            a.Ea("ytp-error-content").style.paddingTop = "0px";
            var c = a.Ea("ytp-error-content"),
                d = c.clientHeight;
            a.j && a.j.resize(b, b.height - d);
            c.style.paddingTop = (b.height - (a.j ? a.j.element.clientHeight : 0)) / 2 - d / 2 + "px"
        },
        Iib = function(a, b) {
            var c = a.api.U(),
                d;
            b.reason && (Gib(b.reason) ? d = g.vy(b.reason) : d = g.NU(g.uy(b.reason)), a.Cd(d, "content"));
            var e;
            b.subreason && (Gib(b.subreason) ? e = g.vy(b.subreason) : e = g.NU(g.uy(b.subreason)), a.Cd(e, "subreason"));
            if (b.proceedButton && b.proceedButton.buttonRenderer) {
                d = a.Ea("ytp-error-content-wrap-subreason");
                b = b.proceedButton.buttonRenderer;
                var f = g.me("A");
                if (b.text && b.text.simpleText && (e = b.text.simpleText, f.textContent = e, !Hib(d, e) && (!c.C || c.embedsErrorLinks))) {
                    var h;
                    c = (h = g.R(b == null ? void 0 : b.navigationEndpoint, g.Py)) == null ?
                        void 0 : h.url;
                    var l;
                    h = (l = g.R(b == null ? void 0 : b.navigationEndpoint, g.Py)) == null ? void 0 : l.target;
                    c && (f.setAttribute("href", c), a.api.createClientVe(f, a, 178424), a.T(f, "click", function(m) {
                        Eib(a, m, f)
                    }));
                    h && f.setAttribute("target", h);
                    l = g.me("DIV");
                    l.appendChild(f);
                    d.appendChild(l)
                }
            }
        },
        Gib = function(a) {
            if (a.runs)
                for (var b = 0; b < a.runs.length; b++)
                    if (a.runs[b].navigationEndpoint) return !0;
            return !1
        },
        Hib = function(a, b) {
            a = g.ee("A", a);
            for (var c = 0; c < a.length; c++)
                if (a[c].textContent === b) return !0;
            return !1
        },
        Jib = function(a, b) {
            g.T.call(this, {
                I: "a",
                La: ["ytp-impression-link"],
                W: {
                    target: "{{target}}",
                    href: "{{url}}",
                    "aria-label": "Watch on YouTube"
                },
                V: [{
                    I: "div",
                    S: "ytp-impression-link-content",
                    W: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "div",
                        S: "ytp-impression-link-text",
                        va: "Watch on"
                    }, {
                        I: "div",
                        S: "ytp-impression-link-logo",
                        va: "{{logoSvg}}"
                    }]
                }]
            });
            this.api = a;
            this.Ne = b;
            this.updateValue("target", a.U().Y);
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(this.api, "presentingplayerstatechange", this.Ek);
            this.T(this.api, "videoplayerreset", this.JU);
            this.T(this.element,
                "click", this.onClick);
            this.onVideoDataChange();
            this.JU()
        },
        Kib = function(a) {
            var b = {};
            g.$R(a.api, "addEmbedsConversionTrackingParams", [b]);
            var c = a.api.getVideoUrl();
            a.api.L("embeds_web_enable_referring_feature_deprecation") || g.YL(b, "emb_imp_woyt");
            return c = g.aj(c, b)
        },
        Z4 = function(a) {
            g.T.call(this, {
                I: "div",
                La: ["ytp-mobile-a11y-hidden-seek-button"],
                V: [{
                    I: "button",
                    La: ["ytp-mobile-a11y-hidden-seek-button-rewind", "ytp-button"],
                    W: {
                        "aria-label": "Rewind 10 seconds",
                        "aria-hidden": "false"
                    }
                }, {
                    I: "button",
                    La: ["ytp-mobile-a11y-hidden-seek-button-forward", "ytp-button"],
                    W: {
                        "aria-label": "Fast forward 10 seconds",
                        "aria-hidden": "false"
                    }
                }]
            });
            this.api = a;
            this.j = this.Ea("ytp-mobile-a11y-hidden-seek-button-rewind");
            this.forwardButton = this.Ea("ytp-mobile-a11y-hidden-seek-button-forward");
            this.api.createClientVe(this.j, this,
                141902);
            this.api.createClientVe(this.forwardButton, this, 141903);
            this.T(this.api, "presentingplayerstatechange", this.Ek);
            this.T(this.j, "click", this.B);
            this.T(this.forwardButton, "click", this.C);
            this.Ek()
        },
        $4 = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-endscreen-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-end-panel",
                    V: [{
                        I: "button",
                        La: ["ytp-muted-autoplay-end-text", "ytp-button"],
                        va: "{{text}}"
                    }]
                }]
            });
            this.api = a;
            this.D = this.Ea("ytp-muted-autoplay-end-panel");
            this.B = !1;
            this.api.createClientVe(this.element, this, 52428);
            this.T(this.api, "presentingplayerstatechange", this.C);
            this.T(a, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
            this.listen("click", this.onClick);
            this.hide()
        },
        a5 = function(a) {
            var b = a.U();
            g.T.call(this, {
                I: "a",
                La: ["ytp-watermark", "yt-uix-sessionlink"],
                W: {
                    target: b.Y,
                    href: "{{url}}",
                    "aria-label": g.tE("Watch on $WEBSITE", {
                        WEBSITE: g.UP(b)
                    }),
                    "data-sessionlink": "feature=player-watermark"
                },
                va: "{{logoSvg}}"
            });
            this.api = a;
            this.j = null;
            this.B = !1;
            this.state = a.getPlayerStateObject();
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.T(a, "appresize", this.jc);
            this.onVideoDataChange();
            this.xd(this.state);
            this.jc(a.qb().getPlayerSize())
        },
        Lib = function(a) {
            var b = a.api.getVideoData(),
                c = a.api.U().Ed && !g.U(a.state, 2) && !g.SR(a.api.getVideoData(1));
            b.mutedAutoplay || g.py(a, c);
            a.api.logVisibility(a.element, c)
        },
        Oib = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-muted-autoplay-overlay",
                V: [{
                    I: "div",
                    S: "ytp-muted-autoplay-bottom-buttons",
                    V: [{
                        I: "button",
                        La: ["ytp-muted-autoplay-equalizer", "ytp-button"],
                        W: {
                            "aria-label": "Muted Playback Indicator"
                        },
                        V: [{
                            I: "div",
                            La: ["ytp-muted-autoplay-equalizer-icon"],
                            V: [{
                                I: "svg",
                                W: {
                                    height: "100%",
                                    version: "1.1",
                                    viewBox: "-4 -4 24 24",
                                    width: "100%"
                                },
                                V: [{
                                    I: "g",
                                    W: {
                                        fill: "#fff"
                                    },
                                    V: [{
                                            I: "rect",
                                            S: "ytp-equalizer-bar-left",
                                            W: {
                                                height: "9",
                                                width: "4",
                                                x: "1",
                                                y: "7"
                                            }
                                        }, {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-middle",
                                            W: {
                                                height: "14",
                                                width: "4",
                                                x: "6",
                                                y: "2"
                                            }
                                        },
                                        {
                                            I: "rect",
                                            S: "ytp-equalizer-bar-right",
                                            W: {
                                                height: "12",
                                                width: "4",
                                                x: "11",
                                                y: "4"
                                            }
                                        }
                                    ]
                                }]
                            }]
                        }]
                    }]
                }]
            });
            var b = this;
            this.api = a;
            this.bottomButtons = this.Ea("ytp-muted-autoplay-bottom-buttons");
            this.Ea("ytp-muted-autoplay-equalizer");
            this.C = new g.fp(this.D9, 4E3, this);
            this.B = !1;
            a.createClientVe(this.element, this, 39306);
            this.T(a, "presentingplayerstatechange", this.aN);
            this.T(a, "onMutedAutoplayStarts", function() {
                Mib(b);
                b.aN();
                Nib(b);
                b.B = !1
            });
            this.T(a, "onAutoplayBlocked", this.onAutoplayBlocked);
            this.listen("click", this.onClick);
            this.T(a, "onMutedAutoplayEnds", this.onMutedAutoplayEnds);
            this.hide();
            g.cS(a.app) && (Mib(this), this.aN(), Nib(this));
            g.Q(this, this.C)
        },
        Nib = function(a) {
            a.Hb && a.j && (a.j.show(), a.C.start())
        },
        Mib = function(a) {
            a.watermark || (a.watermark = new a5(a.api), g.Q(a, a.watermark), a.watermark.Ja(a.bottomButtons, 0), g.rp(a.watermark.element, "ytp-muted-autoplay-watermark", !0), a.j = new g.gz(a.watermark, 0, !0, 100), g.Q(a, a.j))
        },
        b5 = function(a) {
            g.T.call(this, {
                I: "div",
                S: "ytp-pause-overlay",
                W: {
                    tabIndex: "-1"
                }
            });
            var b = this;
            this.api = a;
            this.C = new g.EF(this);
            this.D = new g.gz(this, 1E3, !1, 100, function() {
                b.j.B = !1
            }, function() {
                b.j.B = !0
            });
            this.B = !1;
            this.expandButton = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-expand"],
                va: this.api.Zc() ? "More shorts" : "More videos"
            });
            a.U().controlsType === "0" && g.np(a.getRootNode(), "ytp-pause-overlay-controls-hidden");
            this.api.L("embeds_web_enable_pause_overlay_rounding") && g.np(this.element, "ytp-pause-overlay-round-corners");
            g.Q(this, this.C);
            g.Q(this, this.D);
            var c = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-collapse"],
                W: {
                    "aria-label": this.api.Zc() ? "Hide more shorts" : "Hide more videos"
                },
                V: [{
                    I: "div",
                    S: "ytp-collapse-icon",
                    V: [g.Iy()]
                }]
            });
            g.Q(this, c);
            c.Ja(this.element);
            c.listen("click", this.G, this);
            g.Q(this, this.expandButton);
            this.expandButton.Ja(this.element);
            this.expandButton.listen("click", this.K, this);
            this.j = new g.e1(a);
            g.Q(this, this.j);
            this.j.B = !1;
            this.j.Ja(this.element);
            this.api.Zc() ? this.api.createClientVe(this.element, this, 157212) : this.api.createClientVe(this.element, this, 172777);
            this.C.T(this.api, "presentingplayerstatechange", this.Ta);
            this.C.T(this.api, "videodatachange", this.Ta);
            this.hide()
        },
        c5 = function(a) {
            g.T.call(this, {
                I: "div",
                La: ["ytp-player-content", "ytp-iv-player-content"],
                V: [{
                    I: "div",
                    S: "ytp-countdown-timer",
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
                            S: "ytp-svg-countdown-timer-ring",
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
                            I: "circle",
                            S: "ytp-svg-countdown-timer-background",
                            W: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-opacity": "0.3",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }]
                    }, {
                        I: "span",
                        S: "ytp-countdown-timer-time",
                        va: "{{duration}}"
                    }]
                }]
            });
            this.api = a;
            this.K = this.Ea("ytp-svg-countdown-timer-ring");
            this.j = null;
            this.D = this.C = 0;
            this.B = !1;
            this.G = 0;
            this.api.createClientVe(this.element, this, 159628)
        },
        Qib = function(a) {
            a.j || (a.C = 5E3, a.D = (0, g.uu)(), a.j = new g.ep(function() {
                Pib(a)
            }, null), Pib(a))
        },
        Pib = function(a) {
            if (!a.B) {
                var b = Math.min((0, g.uu)() - a.D, a.C);
                var c = a.C - b;
                b = a.C === 0 ? 0 : Math.max(c / a.C, 0);
                c = Math.round(c / 1E3);
                a.K.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
                a.updateValue("duration", c);
                b <= 0 && a.j ? d5(a) : a.j && a.j.start()
            }
        },
        d5 = function(a) {
            a.j && (a.j.dispose(), a.j = null, a.B = !1)
        },
        Sib = function(a) {
            g.jU.call(this, a);
            this.J = a;
            this.j = new g.EF(this);
            this.B = null;
            this.N = !1;
            this.countdownTimer = null;
            this.Y = !1;
            Rib(this);
            g.Q(this, this.j);
            this.load()
        },
        Uib = function(a) {
            var b = g.a9a(a.J);
            b !== a.Y && (a.Y = b, a.G && (a.G.dispose(), a.G = null), a.C && (a.C.dispose(), a.C = null), a.D && (a.D.dispose(), a.D = null), a.B && (a.B.stop(), a.B.dispose(), a.B = null), b && (b = g.eS(a.J), a.J.Zc() && (a.D = new g.T({
                    I: "div",
                    S: "ytp-pause-overlay-backdrop",
                    W: {
                        tabIndex: "-1"
                    }
                }), g.Q(a, a.D), g.KS(a.J, a.D.element, 4), a.B = new g.gz(a.D, 1E3, !1, 100), g.Q(a, a.B), a.D.hide()), a.G = new g.T({
                    I: "div",
                    S: "ytp-pause-overlay-container",
                    W: {
                        tabIndex: "-1"
                    }
                }), g.Q(a, a.G), a.J.L("embeds_web_enable_keto_pause_overlay") ? Yhb(a.G.element, S4(zib, {
                    J: a.J,
                    Ne: b
                })) :
                (a.C = new b5(a.J, b), g.Q(a, a.C), a.C.Ja(a.G.element)), g.KS(a.J, a.G.element, 4), Tib(a, a.J.getPlayerStateObject())))
        },
        Tib = function(a, b) {
            a.B && (!g.U(b, 4) && !g.U(b, 2) || g.U(b, 1024) ? a.B.hide() : a.B.show())
        },
        Rib = function(a) {
            var b = a.J;
            a = !!b.Zc();
            g.rp(b.getRootNode(), "ytp-shorts-mode", a);
            if (b = b.getVideoData()) b.lX = a
        },
        e5 = function(a, b) {
            var c = a.J.U();
            a = {
                adSource: "EMBEDS_AD_SOURCE_YOUTUBE",
                breakType: a.J.getCurrentTime() === 0 ? "EMBEDS_AD_BREAK_TYPE_PRE_ROLL" : a.J.getPlayerState() === 0 ? "EMBEDS_AD_BREAK_TYPE_POST_ROLL" : "EMBEDS_AD_BREAK_TYPE_MID_ROLL",
                embedUrl: g.Dfa(a.J.U().loaderUrl),
                eventType: b,
                youtubeHost: g.Vi(a.J.U().Ga) || ""
            };
            a.embeddedPlayerMode = c.Fa;
            g.bu("embedsAdEvent", a)
        },
        Zgb = 0,
        Vgb = 0;
    var vgb = Object.prototype.hasOwnProperty;
    sgb.prototype = Object.create(null);
    var cib = ygb();
    var l4 = null;
    var Ggb = typeof Node !== "undefined" && Node.prototype.getRootNode || function() {
        for (var a = this, b = a; a;) b = a, a = a.parentNode;
        return b
    };
    var e4 = null,
        g4 = null,
        c4 = null,
        i4 = null,
        j4 = [],
        h4 = Dgb,
        k4 = [],
        $hb = function(a) {
            return Hgb(function(b, c, d) {
                c4 = g4 = b;
                g4 = null;
                c(d);
                f4(null);
                g4 = c4;
                c4 = c4.parentNode;
                return b
            }, a)
        }(),
        Zhb = function(a) {
            return Hgb(function(b, c, d) {
                var e = {
                    nextSibling: b
                };
                g4 = e;
                c(d);
                c4 && f4(b.nextSibling);
                return e === g4 ? null : g4
            }, a)
        }();
    var m4 = [],
        dib = 0;
    var X4 = new sgb;
    var q4 = {
        attributes: ygb(),
        vA: function(a, b) {
            throw b;
        },
        T7: !0,
        U7: !0,
        RM: g.m9a,
        v3: g.n9a
    };
    var n4 = [];
    var lib = Symbol("ALLOW_IDOM_INTEROP_SYMBOL");
    var Ngb = Symbol("DISABLE_ON_CLEANUP");
    var t4 = Symbol("Disposable.dispose");
    var f5 = {},
        Mgb = (f5.DZ = !0, f5[t4] = function() {
            throw Error("This owner cannot be disposed");
        }, f5.Ma = !1, f5);
    var r4 = null;
    var x4 = new Set,
        g5 = {},
        Vib = Object.assign({}, {
            DZ: !0
        }, g.To, (g5.dg = void 0, g5.tF = !1, g5.LS = null, g5.NO = !0, g5.Kt = !1, g5[t4] = Sgb, g5.dJ = void 0, g5));
    var y4 = new Set;
    g.Vka = function() {
        if (q4.v3) {
            var a = x4;
            x4 = new Set;
            Rgb(a)
        } else Rgb(x4);
        q4.v3 ? (a = y4, y4 = new Set, Wgb(a)) : Wgb(y4)
    };
    var bhb = Object.assign({}, Vib, {
        pE: Ugb,
        Kt: !1
    });
    var khb = new Set("allowfullscreen async autofocus autoplay checked controls default defer disabled formnovalidate hidden ismap itemscope jsshadow jsslot loop multiple muted novalidate open playsinline readonly required reversed scoped seamless selected spellcheck sortable typemustmatch".split(" "));
    var ehb = {
            align: 1,
            alt: 1,
            "aria-activedescendant": 10,
            "aria-atomic": 1,
            "aria-autocomplete": 1,
            "aria-busy": 1,
            "aria-checked": 1,
            "aria-controls": 10,
            "aria-current": 1,
            "aria-describedby": 10,
            "aria-disabled": 1,
            "aria-dropeffect": 1,
            "aria-expanded": 1,
            "aria-haspopup": 1,
            "aria-hidden": 1,
            "aria-invalid": 1,
            "aria-label": 1,
            "aria-labelledby": 10,
            "aria-level": 1,
            "aria-live": 1,
            "aria-multiline": 1,
            "aria-multiselectable": 1,
            "aria-orientation": 1,
            "aria-owns": 10,
            "aria-posinset": 1,
            "aria-pressed": 1,
            "aria-readonly": 1,
            "aria-relevant": 1,
            "aria-required": 1,
            "aria-selected": 1,
            "aria-setsize": 1,
            "aria-sort": 1,
            "aria-valuemax": 1,
            "aria-valuemin": 1,
            "aria-valuenow": 1,
            "aria-valuetext": 1,
            async: 8,
            autocapitalize: 1,
            autocomplete: 1,
            autocorrect: 1,
            autofocus: 1,
            autoplay: 1,
            bgcolor: 1,
            border: 1,
            cellpadding: 1,
            cellspacing: 1,
            checked: 1,
            cite: 3,
            "class": 1,
            color: 1,
            cols: 1,
            colspan: 1,
            contenteditable: 1,
            controls: 1,
            datetime: 1,
            dir: 8,
            disabled: 1,
            download: 1,
            draggable: 1,
            enctype: 1,
            face: 1,
            "for": 10,
            formenctype: 1,
            frameborder: 1,
            height: 1,
            hidden: 1,
            href: 4,
            hreflang: 1,
            id: 10,
            ismap: 1,
            itemid: 1,
            itemprop: 1,
            itemref: 1,
            itemscope: 1,
            itemtype: 1,
            label: 1,
            lang: 1,
            list: 10,
            loading: 8,
            loop: 1,
            max: 1,
            maxlength: 1,
            media: 1,
            min: 1,
            minlength: 1,
            multiple: 1,
            muted: 1,
            name: 10,
            nonce: 1,
            open: 1,
            placeholder: 1,
            poster: 3,
            preload: 1,
            rel: 1,
            required: 1,
            reversed: 1,
            role: 1,
            rows: 1,
            rowspan: 1,
            selected: 1,
            shape: 1,
            size: 1,
            sizes: 1,
            slot: 1,
            span: 1,
            spellcheck: 1,
            src: 4,
            srcset: 12,
            start: 1,
            step: 1,
            style: 5,
            summary: 1,
            tabindex: 1,
            target: 8,
            title: 1,
            translate: 1,
            type: 1,
            valign: 1,
            value: 1,
            width: 1,
            wrap: 1
        },
        dhb = {
            a: {
                href: [{
                    zd: 3
                }]
            },
            area: {
                href: [{
                    zd: 3
                }]
            },
            audio: {
                src: [{
                    zd: 3
                }]
            },
            button: {
                formaction: [{
                    zd: 3
                }],
                formmethod: [{
                    zd: 1
                }]
            },
            form: {
                action: [{
                    zd: 3
                }],
                method: [{
                    zd: 1
                }]
            },
            iframe: {
                srcdoc: [{
                    zd: 2
                }]
            },
            img: {
                src: [{
                    zd: 3
                }],
                srcset: [{
                    zd: 11
                }]
            },
            input: {
                accept: [{
                    zd: 1
                }],
                formaction: [{
                    zd: 3
                }],
                formmethod: [{
                    zd: 1
                }],
                pattern: [{
                    zd: 1
                }],
                readonly: [{
                    zd: 1
                }],
                src: [{
                    zd: 3
                }]
            },
            link: {
                href: [{
                    zd: 3,
                    Di: "rel",
                    Mi: "alternate"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "author"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "bookmark"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "canonical"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "cite"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "help"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "icon"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "license"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "next"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "prefetch"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "dns-prefetch"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "prerender"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "preconnect"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "preload"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "prev"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "search"
                }, {
                    zd: 3,
                    Di: "rel",
                    Mi: "subresource"
                }]
            },
            script: {
                defer: [{
                    zd: 1
                }]
            },
            source: {
                src: [{
                    zd: 3
                }],
                srcset: [{
                    zd: 11
                }]
            },
            textarea: {
                readonly: [{
                    zd: 1
                }]
            },
            video: {
                src: [{
                    zd: 3
                }]
            }
        };
    var Wib = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i,
        h5 = {},
        ghb = (h5[1] = {
            Fr: null,
            Du: null,
            Ys: null
        }, h5[2] = {
            Fr: function() {
                return g.ud.toString()
            },
            Du: function(a) {
                return a instanceof g.zd
            },
            Ys: function(a) {
                return g.Ad(a)
            }
        }, h5[3] = {
            Fr: function(a, b, c) {
                return Wib.test(c) ? c : g.ud.toString()
            },
            Du: function(a) {
                return a instanceof g.pd
            },
            Ys: function(a) {
                return g.qd(a)
            }
        }, h5[4] = {
            Fr: function() {
                return g.ud.toString()
            },
            Du: function(a) {
                return a instanceof g.md
            },
            Ys: function(a) {
                return g.nd(a)
            }
        }, h5[5] = {
            Fr: null,
            Du: function(a) {
                return a instanceof g.xd
            },
            Ys: function(a) {
                return a.toString()
            }
        }, h5[7] = {
            Fr: null,
            Du: null,
            Ys: null
        }, h5[8] = {
            Fr: null,
            Du: null,
            Ys: null
        }, h5[10] = {
            Fr: null,
            Du: null,
            Ys: null
        }, h5);
    var bib = Symbol("ATTR_TAG_VALUE");
    RegExp.prototype.hasOwnProperty("sticky");
    var Xib = ygb(),
        mhb = Xib.__default,
        nhb = Xib.style,
        lhb = ["focusin", "focusout"];
    var D4 = {
        Bma: function() {},
        Ioa: function() {},
        Fma: function() {},
        YW: function() {},
        Cma: function() {},
        I7: function() {},
        wE: function() {},
        nJ: function() {},
        J7: function() {}
    };
    var E4 = Symbol("IS_VNODE");
    A4.prototype.wE = function() {};
    A4.prototype.I7 = function() {};
    A4.prototype.nJ = function() {};
    A4.prototype.J7 = function() {};
    var B4 = null;
    g.z(C4, A4);
    C4.prototype.Dy = function(a) {
        var b = this,
            c = B4;
        B4 = this;
        this.D = 0;
        try {
            return p4(function() {
                return $3(g.O$a, function() {
                    return u4(b.qJ, function() {
                        return b.B(a)
                    })
                })
            })
        } finally {
            B4 = c
        }
    };
    var O4, G4 = rhb;
    var P4 = Symbol("reactiveData");
    var shb = Object.assign({}, Vib, {
        pE: Tgb,
        Kt: !0
    });
    var uhb = Object.assign({}, Vib, {
        pE: Tgb,
        Kt: !1
    });
    var Yib;
    (Yib = globalThis).LEGACY_SCRIPT_LOADED != null || (Yib.LEGACY_SCRIPT_LOADED = !1);
    var Zib;
    (Zib = globalThis).isLegacyScript != null || (Zib.isLegacyScript = function() {
        return !1
    });
    var Ihb = Ehb;
    O4 = Jhb;
    var Mhb = [];
    (function() {
        var a = l4;
        l4 = function(b) {
            a == null || a(b);
            Nhb(b)
        }
    })();
    (function(a) {
        var b = {},
            c;
        for (c in a) b = {
            S0: void 0,
            C_: void 0
        }, b.S0 = D4[c], b.C_ = a[c], D4[c] = function(d) {
            return function() {
                var e = g.Fa.apply(0, arguments);
                d.S0.apply(null, g.w(e));
                d.C_.apply(null, g.w(e))
            }
        }(b)
    })({
        YW: function(a) {
            u4(a.qJ, function() {
                var b;
                ((b = a.qz) == null ? 0 : b.length) && Uhb(a.qz)
            })
        },
        wE: function(a) {
            u4(a.qJ, function() {
                var b;
                ((b = a.qz) == null ? 0 : b.length) && Uhb(a.qz)
            })
        },
        nJ: function(a) {
            var b;
            ((b = a.AA) == null ? 0 : b.length) && a.AA.forEach(Thb)
        }
    });
    O4 = Jhb;
    var aib, kib = new Set(["For", "If", "Match", "Watch"]),
        $ib = {},
        ajb = ($ib.__default = function() {
            return z4
        }, $ib.style = function() {
            return z4
        }, $ib),
        i5;
    for (i5 in ajb) q4.attributes[i5] = ajb[i5](q4.attributes[i5]);
    var sib = [],
        tib = !1;
    g.z(Aib, g.T);
    g.k = Aib.prototype;
    g.k.hide = function() {
        this.N = !0;
        g.T.prototype.hide.call(this);
        Bib(this, !1)
    };
    g.k.show = function() {
        this.N = !1;
        g.T.prototype.show.call(this);
        Bib(this, !0)
    };
    g.k.isHidden = function() {
        return this.N
    };
    g.k.r4 = function() {
        this.scrollTo(this.C - this.containerWidth)
    };
    g.k.s4 = function() {
        this.scrollTo(this.C + this.containerWidth)
    };
    g.k.resize = function(a, b) {
        var c = this.api.U(),
            d = 16 / 9,
            e = a.width >= 650,
            f = a.width < 480 || a.height < 290,
            h = Math.min(this.suggestionData.length, this.j.length);
        if (Math.min(a.width, a.height) <= 150 || h === 0 || !c.Dd) this.hide();
        else {
            var l;
            if (e) {
                var m = l = 28;
                this.B = 16
            } else this.B = m = l = 8;
            if (f) {
                var n = 6;
                e = 14;
                var p = 12;
                f = 24;
                c = 12
            } else n = 8, e = 18, p = 16, f = 36, c = 16;
            a = a.width - (48 + l + m);
            l = Math.ceil(a / 150);
            l = Math.min(3, l);
            m = a / l - this.B;
            var q = Math.floor(m / d);
            b && q + 100 > b && m > 50 && (q = Math.max(b, 50 / d), l = Math.ceil(a / (d * (q - 100) + this.B)), m = a / l - this.B,
                q = Math.floor(m / d));
            m < 50 || g.HS(this.api) ? this.hide() : this.show();
            for (b = 0; b < h; b++) {
                d = this.j[b];
                var r = d.Ea("ytp-suggestion-image");
                r.style.width = m + "px";
                r.style.height = q + "px";
                d.Ea("ytp-suggestion-title").style.width = m + "px";
                d.Ea("ytp-suggestion-author").style.width = m + "px";
                d = d.Ea("ytp-suggestion-duration");
                d.style.display = d && m < 100 ? "none" : ""
            }
            h = e + n + p + 4;
            this.K = h + c + (q - f) / 2;
            this.suggestions.element.style.height = q + h + "px";
            this.D = m;
            this.containerWidth = a;
            this.columns = l;
            this.C = 0;
            this.suggestions.element.scrollLeft = -0;
            Cib(this)
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.Y = a.Ff ? !1 : b.D;
        a.suggestions ? this.suggestionData = g.ln(a.suggestions, function(c) {
            return c && !c.playlistId
        }) : this.suggestionData.length = 0;
        Dib(this);
        a.Ff ? this.title.update({
            title: g.tE("More videos from $DNI_RELATED_CHANNEL", {
                DNI_RELATED_CHANNEL: a.author
            })
        }) : this.title.update({
            title: "More videos on YouTube"
        })
    };
    g.k.scrollTo = function(a) {
        a = g.Hd(a, this.containerWidth - this.suggestionData.length * (this.D + this.B), 0);
        this.qa.start(this.C, a, 1E3);
        this.C = a;
        Cib(this);
        Bib(this, !0)
    };
    g.z(Y4, g.MU);
    Y4.prototype.show = function() {
        g.MU.prototype.show.call(this);
        Fib(this, this.api.qb().getPlayerSize())
    };
    Y4.prototype.resize = function(a) {
        g.MU.prototype.resize.call(this, a);
        this.j && (Fib(this, a), g.rp(this.element, "related-on-error-overlay-visible", !this.j.isHidden()))
    };
    Y4.prototype.B = function(a) {
        g.MU.prototype.B.call(this, a);
        var b = this.api.getVideoData();
        if (b.PD || b.playerErrorMessageRenderer)(a = b.PD) ? Iib(this, a) : b.playerErrorMessageRenderer && Iib(this, b.playerErrorMessageRenderer);
        else {
            var c;
            a.On && (b.ww ? Gib(b.ww) ? c = g.vy(b.ww) : c = g.NU(g.uy(b.ww)) : c = g.NU(a.On), this.Cd(c, "subreason"))
        }
    };
    g.z(Jib, g.T);
    g.k = Jib.prototype;
    g.k.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = qgb(),
            c = 96714;
        g.TR(a) ? (b = rgb(), c = 216165, g.np(this.element, "ytp-music-impression-link")) : g.pp(this.element, "ytp-music-impression-link");
        this.updateValue("logoSvg", b);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this, c)
    };
    g.k.Ek = function() {
        this.api.getPlayerStateObject().isCued() || (this.hide(), this.api.logVisibility(this.element, !1))
    };
    g.k.JU = function() {
        var a = this.api.getVideoData(),
            b = this.api.U(),
            c = this.api.getVideoData().Ff,
            d = b.Ed,
            e = !b.Dd,
            f = this.Ne.Pg();
        b = b.C;
        d || f || c || e || b || this.api.Zc() || !a.videoId ? (this.hide(), this.api.logVisibility(this.element, !1)) : (a = Kib(this), this.updateValue("url", a), this.show())
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = Kib(this);
        g.bT(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") || this.api.logClick(this.element)
    };
    g.k.show = function() {
        this.api.getPlayerStateObject().isCued() && (g.T.prototype.show.call(this), this.api.hasVe(this.element) && this.api.logVisibility(this.element, !0))
    };
    g.z(Z4, g.T);
    Z4.prototype.Ek = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.ai() || g.U(a, 2) && g.kS(this.api) || g.U(a, 64) ? (this.api.logVisibility(this.j, !1), this.api.logVisibility(this.forwardButton, !1), this.hide()) : (this.show(), this.api.logVisibility(this.j, !0), this.api.logVisibility(this.forwardButton, !0))
    };
    Z4.prototype.B = function() {
        this.api.seekBy(-10 * this.api.getPlaybackRate(), void 0, void 0, 83);
        this.api.logClick(this.j)
    };
    Z4.prototype.C = function() {
        this.api.seekBy(10 * this.api.getPlaybackRate(), void 0, void 0, 82);
        this.api.logClick(this.forwardButton)
    };
    g.z($4, g.T);
    $4.prototype.C = function() {
        var a = this.api.getPlayerStateObject();
        this.api.getVideoData().mutedAutoplay && (g.U(a, 2) && !this.Hb ? (this.show(), this.j || (this.j = new g.KU(this.api), g.Q(this, this.j), this.j.Ja(this.D, 0), this.j.show()), a = this.api.getVideoData(), this.updateValue("text", a.HU), g.rp(this.element, "ytp-muted-autoplay-show-end-panel", !0), this.api.logVisibility(this.element, this.Hb), this.api.Ac("onMutedAutoplayEnds")) : this.hide())
    };
    $4.prototype.onClick = function() {
        if (!this.B) {
            this.j && (this.j.xa(), this.j = null);
            g.rp(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            mgb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.iB();
            this.api.logClick(this.element);
            this.hide();
            this.B = !0
        }
    };
    $4.prototype.onMutedAutoplayStarts = function() {
        this.B = !1;
        this.j && (this.j.xa(), this.j = null)
    };
    g.z(a5, g.T);
    g.k = a5.prototype;
    g.k.onStateChange = function(a) {
        this.xd(a.state)
    };
    g.k.xd = function(a) {
        this.state !== a && (this.state = a);
        Lib(this)
    };
    g.k.onVideoDataChange = function() {
        var a = this.api.U();
        a.C && g.np(this.element, "ytp-no-hover");
        var b = this.api.getVideoData();
        b.videoId && !a.C ? (a = this.api.getVideoUrl(!0, !1, !1, !0), this.updateValue("url", a), this.j || (this.j = this.listen("click", this.onClick))) : this.j && (this.updateValue("url", null), this.Nc(this.j), this.j = null);
        a = qgb();
        var c = 76758;
        g.TR(b) && (a = rgb(), c = 216164);
        this.updateValue("logoSvg", a);
        this.api.hasVe(this.element) && this.api.destroyVe(this.element);
        this.api.createClientVe(this.element, this,
            c);
        Lib(this)
    };
    g.k.onClick = function(a) {
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") && this.api.logClick(this.element);
        var b = this.api.getVideoUrl(!g.Dz(a), !1, !0, !0);
        if (this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            var c = {};
            g.$R(this.api, "addEmbedsConversionTrackingParams", [c]);
            this.api.L("embeds_web_enable_referring_feature_deprecation") || g.YL(c, "emb_yt_watermark");
            b = g.aj(b, c)
        }
        g.bT(b, this.api, a);
        this.api.L("web_player_log_click_before_generating_ve_conversion_params") ||
            this.api.logClick(this.element)
    };
    g.k.jc = function(a) {
        if ((a = a.width < 480) && !this.B || !a && this.B) {
            var b = new g.T(qgb()),
                c = this.Ea("ytp-watermark");
            g.rp(c, "ytp-watermark-small", a);
            g.pe(c);
            b.Ja(c);
            this.B = a
        }
    };
    g.z(Oib, g.T);
    g.k = Oib.prototype;
    g.k.aN = function() {
        var a = this.api.getPlayerStateObject();
        !this.api.getVideoData().mutedAutoplay || g.U(a, 2) ? this.hide() : this.Hb || (g.T.prototype.show.call(this), this.api.logVisibility(this.element, this.Hb))
    };
    g.k.D9 = function() {
        this.j && this.j.hide()
    };
    g.k.onAutoplayBlocked = function() {
        this.hide();
        mgb(this.api.getVideoData())
    };
    g.k.onClick = function() {
        if (!this.B) {
            g.rp(this.api.getRootNode(), "ytp-muted-autoplay", !1);
            var a = this.api.getVideoData(),
                b = this.api.getCurrentTime();
            mgb(a);
            this.api.loadVideoById(a.videoId, b);
            this.api.iB();
            this.api.logClick(this.element);
            this.api.Ac("onMutedAutoplayEnds");
            this.B = !0
        }
    };
    g.k.onMutedAutoplayEnds = function() {
        this.watermark && (this.watermark.xa(), this.watermark = null)
    };
    g.z(b5, g.T);
    b5.prototype.hide = function() {
        g.pp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        g.T.prototype.hide.call(this)
    };
    b5.prototype.G = function() {
        this.B = !0;
        g.pp(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.Zc() && this.api.logVisibility(this.element, !1);
        this.expandButton.focus()
    };
    b5.prototype.K = function() {
        this.B = !1;
        g.np(this.api.getRootNode(), "ytp-expand-pause-overlay");
        this.api.Zc() && this.api.logVisibility(this.element, !0);
        this.focus()
    };
    b5.prototype.Ta = function() {
        var a = this.api.getPlayerStateObject();
        g.U(a, 1) || g.U(a, 16) || g.U(a, 32) || (!g.U(a, 4) || g.U(a, 2) || g.U(a, 1024) ? (this.B || this.api.logVisibility(this.element, !1), this.D.hide()) : this.j.suggestionData.length > 0 && (this.B || (g.np(this.api.getRootNode(), "ytp-expand-pause-overlay"), g.f1(this.j), this.j.show(), this.api.logVisibility(this.element, !0)), this.D.show()))
    };
    g.z(c5, g.T);
    c5.prototype.show = function() {
        g.T.prototype.show.call(this);
        this.api.logVisibility(this.element, !0)
    };
    c5.prototype.xa = function() {
        d5(this);
        g.T.prototype.xa.call(this)
    };
    g.z(Sib, g.jU);
    g.k = Sib.prototype;
    g.k.jn = function() {
        return !1
    };
    g.k.create = function() {
        var a = this.J.U(),
            b = g.eS(this.J),
            c, d = (c = this.J.getVideoData()) == null ? void 0 : c.clientPlaybackNonce;
        d && g.hB({
            clientPlaybackNonce: d
        });
        a.bb && Uib(this);
        this.Z = new Oib(this.J);
        g.Q(this, this.Z);
        g.KS(this.J, this.Z.element, 4);
        this.ra = new $4(this.J);
        g.Q(this, this.ra);
        g.KS(this.J, this.ra.element, 4);
        a.Ed && (this.watermark = new a5(this.J), g.Q(this, this.watermark), g.KS(this.J, this.watermark.element, 8));
        b && (this.K = new Jib(this.J, b), g.Q(this, this.K), g.KS(this.J, this.K.element, 8), g.cS(this.J.app) &&
            (this.onMutedAutoplayStarts(), this.K.hide()));
        a.B && (this.qa = new Z4(this.J), g.Q(this, this.qa), g.KS(this.J, this.qa.element, 4));
        this.j.T(this.J, "appresize", this.jc);
        this.j.T(this.J, "presentingplayerstatechange", this.Ek);
        this.j.T(this.J, "videodatachange", this.onVideoDataChange);
        this.j.T(this.J, "videoplayerreset", this.onReset);
        this.j.T(this.J, "onMutedAutoplayStarts", this.onMutedAutoplayStarts);
        this.j.T(this.J, "onAdStart", this.onAdStart);
        this.j.T(this.J, "onAdComplete", this.onAdComplete);
        this.j.T(this.J,
            "onAdSkip", this.onAdSkip);
        this.j.T(this.J, "onAdStateChange", this.onAdStateChange);
        if (this.N = g.at(g.NP(a))) this.countdownTimer = new c5(this.J), g.Q(this, this.countdownTimer), g.KS(this.J, this.countdownTimer.element, 4), this.countdownTimer.hide(), this.j.T(this.J, g.iE("embeds"), this.onCueRangeEnter), this.j.T(this.J, g.jE("embeds"), this.onCueRangeExit);
        this.Gc(this.J.getPlayerStateObject());
        this.player.Dg("embed");
        var e, f;
        ((e = this.J.U().getWebPlayerContextConfig()) == null ? 0 : (f = e.embedsHostFlags) == null ? 0 : f.allowOverridingVisitorDataPlayerVars) &&
        (a = g.Lr("IDENTITY_MEMENTO")) && this.J.Ym("onMementoChange", a)
    };
    g.k.onCueRangeEnter = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (this.countdownTimer.show(), Qib(this.countdownTimer))
    };
    g.k.onCueRangeExit = function(a) {
        a.getId() === "countdown timer" && this.countdownTimer && (d5(this.countdownTimer), this.countdownTimer.hide())
    };
    g.k.jc = function() {
        var a = this.J.qb().getPlayerSize();
        this.xg && this.xg.resize(a)
    };
    g.k.onReset = function() {
        Rib(this)
    };
    g.k.Ek = function(a) {
        this.Gc(a.state)
    };
    g.k.Gc = function(a) {
        g.U(a, 128) ? (this.xg || (this.xg = new Y4(this.J), g.Q(this, this.xg), g.KS(this.J, this.xg.element, 4)), this.xg.B(a.eh), this.xg.show(), g.np(this.J.getRootNode(), "ytp-embed-error")) : this.xg && (this.xg.dispose(), this.xg = null, g.pp(this.J.getRootNode(), "ytp-embed-error"));
        if (this.countdownTimer && this.countdownTimer.j)
            if (g.U(a, 64)) this.countdownTimer.hide(), d5(this.countdownTimer);
            else if (a.isPaused()) {
            var b = this.countdownTimer;
            b.B || (b.B = !0, b.G = (0, g.uu)())
        } else a.isPlaying() && this.countdownTimer.B &&
            (b = this.countdownTimer, b.B && (b.D += (0, g.uu)() - b.G, b.B = !1, Pib(b)));
        Tib(this, a)
    };
    g.k.onMutedAutoplayStarts = function() {
        this.J.getVideoData().mutedAutoplay && this.Z && g.rp(this.J.getRootNode(), "ytp-muted-autoplay", !0)
    };
    g.k.onVideoDataChange = function(a, b) {
        var c = this.QF !== b.videoId;
        a = !c && a === "dataloaded";
        var d = {
            isShortsModeEnabled: !!this.J.Zc()
        };
        g.bu("embedsVideoDataDidChange", {
            clientPlaybackNonce: b.clientPlaybackNonce,
            isReload: a,
            runtimeEnabledFeatures: d
        });
        c && (this.QF = b.videoId, this.countdownTimer && (this.countdownTimer.show(), this.countdownTimer.hide()), this.N && (this.J.qf("embeds"), b.isAd() || b.limitedPlaybackDurationInSeconds < 5 || g.HS(this.J) || (b = Math.max((b.startSeconds + b.limitedPlaybackDurationInSeconds - 5) * 1E3, 0),
            b = new g.gE(b, b + 5E3, {
                id: "countdown timer",
                namespace: "embeds"
            }), this.J.kf([b]))), this.J.U().bb && (Rib(this), Uib(this)));
        this.J.U().C && this.C && this.C.detach()
    };
    g.k.onAdStart = function() {
        e5(this, "EMBEDS_AD_EVENT_TYPE_AD_STARTED")
    };
    g.k.onAdComplete = function() {
        e5(this, "EMBEDS_AD_EVENT_TYPE_AD_COMPLETED")
    };
    g.k.onAdSkip = function() {
        e5(this, "EMBEDS_AD_EVENT_TYPE_AD_SKIPPED")
    };
    g.k.onAdStateChange = function(a) {
        a === 2 && e5(this, "EMBEDS_AD_EVENT_TYPE_AD_PAUSED")
    };
    g.iU("embed", Sib);
})(_yt_player);