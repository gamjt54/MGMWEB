google.maps.__gjsload__('overlay', function(_) {
    var VC = function(a) {
            this.Eg = a
        },
        era = function() {},
        WC = function(a) {
            a.Py = a.Py || new era;
            return a.Py
        },
        fra = function(a) {
            this.Ch = new _.xn(() => {
                const b = a.Py;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.ix && a.onAdd) a.onAdd();
                        b.ix = !0;
                        a.draw()
                    }
                } else {
                    if (b.ix)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.ix = !1
                }
            }, 0)
        },
        gra = function(a, b) {
            const c = WC(a);
            let d = c.mw;
            d || (d = c.mw = new fra(a));
            _.Ob(c.Ph || [], _.yk);
            var e = c.ni = c.ni || new _.Gla;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.EC = c.EC || new VC(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.yn(d.Ch);
            c.Ph = [_.wk(a, "panes_changed", e), _.wk(f, "zoom_changed", e), _.wk(f, "offset_changed", e), _.wk(b, "projection_changed", e), _.wk(f, "projectioncenterq_changed", e)];
            _.yn(d.Ch);
            b instanceof _.Uk ? (_.Il(b, "Ox"), _.Gl(b, 148440)) : b instanceof _.cm && (_.Il(b, "Oxs"),
                _.Gl(b, 181451))
        },
        lra = function(a) {
            if (a) {
                var b = a.getMap();
                if (hra(a) !== b && b && b instanceof _.Uk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new ira(b, a, c.overlayLayer) : c.Fg.then(({
                        kh: d
                    }) => {
                        const e = new jra(b, d);
                        d.Bi(e);
                        c.overlayLayer = e;
                        kra(a);
                        lra(a)
                    })
                }
            }
        },
        kra = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Eg.unbindAll(), b.Eg.set("panes", null), b.Eg.set("projection", null), b.Gg.ul(b), b.Fg && (b.Fg = !1, b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()))
            }
        },
        hra = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        mra = function(a,
            b) {
            a.Eg.get("projection") != b && (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b))
        };
    _.Ha(VC, _.Ok);
    VC.prototype.changed = function(a) {
        a != "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.jj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Eg : null))
    };
    var XC = {};
    _.Ha(fra, _.Ok);
    XC.El = function(a) {
        if (a) {
            var b = a.getMap();
            (WC(a).mC || null) !== b && (b && gra(a, b), WC(a).mC = b)
        }
    };
    XC.ul = function(a) {
        const b = WC(a);
        var c = b.ni;
        c && c.unbindAll();
        (c = b.EC) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Ph && _.Ob(b.Ph, _.yk);
        b.Ph = null;
        b.mw && (b.mw.Ch.Cj(), b.mw = null);
        delete WC(a).mC
    };
    var YC = {},
        ira = class {
            constructor(a, b, c) {
                this.map = a;
                this.Eg = b;
                this.Gg = c;
                this.Fg = !1;
                _.Il(this.map, "Ox");
                _.Gl(this.map, 148440);
                c.El(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.Eg.onAdd && this.Eg.onAdd());
                this.Eg.draw && this.Eg.draw()
            }
        },
        jra = class {
            constructor(a, b) {
                this.Ig = a;
                this.Gg = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            ri(a, b, c, d, e, f, g, h) {
                const k = this.Eg = this.Eg || new _.iA(this.Ig, this.Gg, () => {});
                k.ri(a, b, c, d, e, f, g, h);
                for (const m of this.Fg) mra(m, k), m.draw()
            }
            El(a) {
                this.Fg.push(a);
                this.Eg && mra(a, this.Eg);
                this.Gg.refresh()
            }
            ul(a) {
                _.Wb(this.Fg,
                    a)
            }
        };
    YC.El = lra;
    YC.ul = kra;
    _.lk("overlay", {
        AA: function(a) {
            if (a) {
                (0, XC.ul)(a);
                (0, YC.ul)(a);
                var b = a.getMap();
                b && (b instanceof _.Uk ? (0, YC.El)(a) : (0, XC.El)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.cw(a, {
                Uk: ({
                    event: b
                }) => {
                    _.mu(b.Hh)
                },
                ak: b => _.Ov(b),
                Xp: b => _.Pv(b),
                Vk: b => _.Pv(b),
                sk: b => _.Qv(b)
            }).Hr(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.uk);
            a.addEventListener("contextmenu", _.uk);
            a.addEventListener("dblclick", _.uk);
            a.addEventListener("mousedown", _.uk);
            a.addEventListener("mousemove", _.uk);
            a.addEventListener("MSPointerDown",
                _.uk);
            a.addEventListener("pointerdown", _.uk);
            a.addEventListener("touchstart", _.uk);
            a.addEventListener("wheel", _.uk)
        }
    });
});