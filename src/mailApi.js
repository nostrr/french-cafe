export const Email = {
    send: function (a) {
        return new Promise(function (n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1);
            a.Action = "Send";
            let t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
                n(e);
            });
        });
    },
    ajaxPost: function (e, n, t) {
        let a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        a.onload = function () {
            let e = a.responseText;
            null != t && t(e)
        };
        a.send(n);
    },
    ajax: function (e, n) {
        let t = Email.createCORSRequest("GET", e);
        t.onload = function () {
            let e = t.responseText;
            null != n && n(e)
        };
        t.send();
    },
    createCORSRequest: function (e, n) {
        let t = new XMLHttpRequest();
        // eslint-disable-next-line no-sequences
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XMLHttpRequest ? (t = new XMLHttpRequest()).open(e, n) : t = null, t
    }
};


export const MailData = {
    SecureToken: 'aef83a42-01fa-4fe3-9f84-98a239fb24c8',
    To: 'lukavnev@gmail.com',
    From: "lukavnev2@gmail.com",
    Subject: "Клієнт на сайті"
}