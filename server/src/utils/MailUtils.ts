import { t } from 'i18next';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export const MAIL_SENDER = 'noreply@yourdomain.com';

/**
 * General mail template
 */
const template = (title: string, content: string, action?: string | null, actionUrl?: string) => /* html */`<!DOCTYPE html>
<html lang="en-US">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>${title}</title>
<meta name="description" content="${title}" />
<style type="text/css">
a:hover {
text-decoration: underline !important;
}
</style>
</head>
<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
<!--100% body table-->
<table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
style="@import url(https://fonts.googleapis.com/css?family=Rubik:300, 400, 500, 700|Open + Sans:300, 400, 600, 700); font-family: 'Open Sans', sans-serif;">
<tr>
<td>
<table style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
<tr>
<td style="height: 80px;">&nbsp;</td>
</tr>
<tr>
<td style="text-align: center;">
<img width="50%" max-width="300" style="-webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQ0KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzJfKTt9DQoJLnN0MntmaWxsOnVybCgjU1ZHSURfM18pO30NCgkuc3Qze2ZpbGw6dXJsKCNTVkdJRF80Xyk7fQ0KPC9zdHlsZT4NCjxnPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjM4LjgxNSIgeTE9IjU1OC4wNTUxIiB4Mj0iNTg3Ljk5NSIgeTI9IjU1OC4wNTUxIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzFCNzVCQyIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMkUzMTkyIi8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTYxLjcsNjU0LjNjLTExLjksMC0yMi40LDcuOS0yNSwxOS4xSDI3My44bDI1NC44LTI1NC44aC05N2MtMi41LTUuNy04LjUtOS41LTE1LjEtOS41DQoJCWMtOS4yLDAtMTYuOCw3LjUtMTYuOCwxNi44YzAsOS4yLDcuNSwxNi44LDE2LjgsMTYuOGM2LjYsMCwxMi41LTMuOCwxNS4xLTkuNWg2MkwyMzguOCw2ODcuOWgyOTcuOGMyLjYsMTEuMiwxMy4yLDE5LjEsMjUsMTkuMQ0KCQljMTQuNSwwLDI2LjMtMTEuOSwyNi4zLTI2LjNDNTg4LDY2Ni4yLDU3Ni4xLDY1NC4zLDU2MS43LDY1NC4zeiBNNDE2LjUsNDM1LjFjLTUsMC05LjItNC4yLTkuMi05LjJjMC01LDQuMi05LjYsOS4yLTkuNg0KCQljNSwwLDkuNiw0LjYsOS42LDkuNkM0MjYuMiw0MzAuOSw0MjEuNiw0MzUuMSw0MTYuNSw0MzUuMXogTTU2MS43LDY5NS44Yy03LjksMC0xNS4xLTcuMy0xNS4xLTE1LjFjMC03LjksNy4yLTE0LjUsMTUuMS0xNC41DQoJCWM3LjksMCwxNC41LDYuNiwxNC41LDE0LjVDNTc2LjEsNjg4LjYsNTY5LjYsNjk1LjgsNTYxLjcsNjk1Ljh6Ii8+DQoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNDkuMDA1IiB5MT0iNDYxLjUwNSIgeDI9Ijc2MS4xODUiIHkyPSI0NjEuNTA1Ij4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0Y3OTQxRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRjE1QTI5Ii8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzM0LjksNTQzLjRjLTEyLjUsMC0yMyw5LjItMjUuNywyMWgtNzlMNTk2LDU5OEg0MzMuMmwyNDQuNS0yNDQuNUg0MTIuMmwtMzMuNS0zNC4yaC03OC4zDQoJCWMtMi0xMS44LTEyLjUtMjAuNC0yNS43LTIwLjRjLTE0LjUsMC0yNS43LDExLjgtMjUuNywyNi4zYzAsMTMuOCwxMS4yLDI1LjYsMjUuNywyNS42YzExLjksMCwyMS03LjIsMjUtMTcuMWg3M2wyMSwyMWgtMzYuOA0KCQljLTIuNy03LjgtOS4yLTEyLjQtMTcuMS0xMi40Yy0xMC41LDAtMTguNCw4LjYtMTguNCwxOC41YzAsMTAuNSw3LjksMTguNCwxOC40LDE4LjRjNy44LDAsMTQuNC01LjIsMTcuMS0xMi4zaDQ4LjlsMC41LDAuNWgyMzcuMQ0KCQlsLTY1LjgsNjUuOEw0NDMuOSw1NjYuOWwtNDUuNiw0NS42aDIwNC4zbDAuMy0wLjNINjcyYzIsNy4zLDkuMiwxMS45LDE3LjEsMTEuOWMxMC41LDAsMTguNC03LjksMTguNC0xOC40DQoJCWMwLTkuOS03LjktMTguNC0xOC40LTE4LjRjLTcuOSwwLTE1LjEsNS4zLTE3LjEsMTIuNWgtNTYuOWwyMS4xLTIxLjVoNzQuM2MzLjMsMTAuNSwxMy4yLDE3LjEsMjQuNCwxNy4xDQoJCWMxNC41LDAsMjYuMy0xMS4yLDI2LjMtMjUuN1M3NDkuMyw1NDMuNCw3MzQuOSw1NDMuNHogTTI3NC43LDMzOS43Yy03LjksMC0xNC41LTcuMi0xNC41LTE0LjVjMC04LjYsNi42LTE1LjEsMTQuNS0xNS4xDQoJCWM4LjUsMCwxNS4xLDYuNSwxNS4xLDE1LjFDMjg5LjgsMzMyLjUsMjgzLjIsMzM5LjcsMjc0LjcsMzM5Ljd6IE0zMzkuOCwzNzEuM2MtNS45LDAtMTAuNS00LjYtMTAuNS0xMC41YzAtNiw0LjYtMTAuNSwxMC41LTEwLjUNCgkJYzYsMCwxMC41LDQuNiwxMC41LDEwLjVDMzUwLjQsMzY2LjcsMzQ1LjgsMzcxLjMsMzM5LjgsMzcxLjN6IE02ODkuMSw1OTUuOGM1LjksMCwxMC41LDQuNiwxMC41LDkuOWMwLDUuOS00LjYsMTAuNS0xMC41LDEwLjUNCgkJYy01LjksMC0xMC41LTQuNi0xMC41LTEwLjVDNjc4LjYsNjAwLjQsNjgzLjIsNTk1LjgsNjg5LjEsNTk1Ljh6IE03MzQuOSw1ODQuMmMtNy45LDAtMTUuMS02LjYtMTUuMS0xNC41DQoJCWMwLTcuOSw3LjItMTQuNSwxNS4xLTE0LjVjNy45LDAsMTQuNSw2LjYsMTQuNSwxNC41Qzc0OS4zLDU3Ny42LDc0Mi43LDU4NC4yLDczNC45LDU4NC4yeiIvPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDEyLjAxNSIgeTE9IjQ0MS45NDUiIHgyPSI3NjEuMTg1IiB5Mj0iNDQxLjk0NSI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQjc1QkMiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzJFMzE5MiIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc2MS4yLDMxMi4xSDQ2My4zYy0yLjYtMTEuMi0xMy4yLTE5LjEtMjUtMTkuMWMtMTQuNSwwLTI2LjMsMTEuOS0yNi4zLDI2LjNjMCwxNC41LDExLjgsMjYuMywyNi4zLDI2LjMNCgkJYzExLjgsMCwyMi40LTcuOSwyNS0xOS4xaDI2Mi45bC05Mi4xLDkyLjFsLTE0LjUsMTQuNUw0ODUuOSw1NjYuOWwtMTQuNSwxNC41aDk3YzIuNSw1LjcsOC41LDkuNSwxNS4xLDkuNQ0KCQljOS4yLDAsMTYuOC03LjUsMTYuOC0xNi44YzAtOS4yLTcuNS0xNi44LTE2LjgtMTYuOGMtNi42LDAtMTIuNSwzLjgtMTUuMSw5LjVoLTYyTDc2MS4yLDMxMi4xTDc2MS4yLDMxMi4xeiBNNDM4LjMsMzMzLjgNCgkJYy03LjksMC0xNC41LTYuNi0xNC41LTE0LjVjMC03LjksNi42LTE1LjEsMTQuNS0xNS4xYzcuOSwwLDE1LjEsNy4zLDE1LjEsMTUuMUM0NTMuNSwzMjcuMiw0NDYuMiwzMzMuOCw0MzguMywzMzMuOHogTTU4My41LDU2NC45DQoJCWM1LDAsOS4yLDQuMiw5LjIsOS4yYzAsNS00LjIsOS42LTkuMiw5LjZjLTUsMC05LjYtNC42LTkuNi05LjZDNTczLjgsNTY5LjEsNTc4LjQsNTY0LjksNTgzLjUsNTY0Ljl6Ii8+DQoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF80XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMzguODI1IiB5MT0iNTM4LjQ5NSIgeDI9Ijc1MS4wMDUiIHkyPSI1MzguNDk1Ij4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0Y3OTQxRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRjE1QTI5Ii8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNzI1LjMsNjQ5LjFjLTExLjksMC0yMSw3LjItMjUsMTcuMWgtNzNsLTIxLTIxaDM2LjhjMi43LDcuOCw5LjIsMTIuNCwxNy4xLDEyLjRjMTAuNSwwLDE4LjQtOC42LDE4LjQtMTguNQ0KCQljMC0xMC41LTcuOS0xOC40LTE4LjQtMTguNGMtNy45LDAtMTQuNCw1LjItMTcuMSwxMi4zaC00OC45bC0wLjUtMC41SDM1Ni42bDUxLjMtNTEuM2wxNC41LTE0LjVsMTc5LjMtMTc5LjRIMzk3LjRsLTAuMywwLjNIMzI4DQoJCWMtMi03LjMtOS4yLTExLjktMTcuMS0xMS45Yy0xMC41LDAtMTguNCw3LjktMTguNCwxOC40YzAsOS45LDcuOSwxOC40LDE4LjQsMTguNGM3LjksMCwxNS4xLTUuMywxNy4xLTEyLjVoNTYuOWwtMjEuMSwyMS41aC03NC4zDQoJCWMtMy4zLTEwLjUtMTMuMi0xNy4xLTI0LjQtMTcuMWMtMTQuNSwwLTI2LjMsMTEuMi0yNi4zLDI1LjdzMTEuOCwyNi4zLDI2LjMsMjYuM2MxMi41LDAsMjMtOS4yLDI1LjctMjFoNzlMNDA0LDQwMmgxNjIuOA0KCQlsLTE2LjcsMTYuN0wzMjIuMyw2NDYuNWgyNjUuNWwzMy41LDM0LjJoNzguM2MyLDExLjgsMTIuNSwyMC40LDI1LjcsMjAuNGMxNC41LDAsMjUuNy0xMS44LDI1LjctMjYuMw0KCQlDNzUxLDY2MC45LDczOS44LDY0OS4xLDcyNS4zLDY0OS4xeiBNNjYwLjIsNjI4LjdjNS45LDAsMTAuNSw0LjYsMTAuNSwxMC41YzAsNi00LjYsMTAuNS0xMC41LDEwLjVjLTYsMC0xMC41LTQuNi0xMC41LTEwLjUNCgkJQzY0OS43LDYzMy4zLDY1NC4yLDYyOC43LDY2MC4yLDYyOC43eiBNMzEwLjksNDA0LjJjLTUuOSwwLTEwLjUtNC42LTEwLjUtOS45YzAtNS45LDQuNi0xMC41LDEwLjUtMTAuNWM2LDAsMTAuNSw0LjYsMTAuNSwxMC41DQoJCUMzMjEuNCwzOTkuNiwzMTYuOCw0MDQuMiwzMTAuOSw0MDQuMnogTTI2NS4xLDQ0NC44Yy03LjksMC0xNC41LTYuNi0xNC41LTE0LjVjMC03LjksNi42LTE0LjUsMTQuNS0xNC41YzcuOSwwLDE1LjEsNi42LDE1LjEsMTQuNQ0KCQlDMjgwLjMsNDM4LjIsMjczLDQ0NC44LDI2NS4xLDQ0NC44eiBNNzI1LjMsNjg5LjljLTguNSwwLTE1LjEtNi42LTE1LjEtMTUuMWMwLTcuMiw2LjYtMTQuNSwxNS4xLTE0LjVjNy45LDAsMTQuNSw3LjIsMTQuNSwxNC41DQoJCUM3MzkuOCw2ODMuMyw3MzMuMiw2ODkuOSw3MjUuMyw2ODkuOXoiLz4NCjwvZz4NCjwvc3ZnPg0K" title="logo" alt="logo" />
</td>
</tr>
<tr>
<td style="height: 20px;">&nbsp;</td>
</tr>
<tr>
<td>
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style=" max-width: 670px; background: #fff; border-radius: 3px;
text-align: center; -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);">
<tr>
<td style="height: 40px;">&nbsp;</td>
</tr>
<tr>
<td style="padding: 0 35px;">
<h1 style="color: #1e1e2d; font-weight: 500; margin: 0; font-size: 32px; font-family: 'Rubik', sans-serif;">${title}</h1>
<span style="display: inline-block; vertical-align: middle; margin: 29px 0 26px; border-bottom: 1px solid #cecece; width: 100px;"></span>
<p style="color: #455056; font-size: 15px; line-height: 24px; margin: 0;">
${content}
</p>
${action ? /* html */`
<a href="${actionUrl || ''}" style=" background: #3f51b5; text-decoration: none !important; font-weight: 500; margin-top: 35px; color: #fff;
text-transform: uppercase; font-size: 14px; padding: 10px 24px; display: inline-block; border-radius: 50px; ">
${action}
</a>
` : ''}
</td>
</tr>
<tr>
<td style="height: 40px;">&nbsp;</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="height: 20px;">&nbsp;</td>
</tr>
<tr>
<td style="height: 80px;">&nbsp;</td>
</tr>
</table>
</td>
</tr>
</table>
<!--/100% body table-->
</body>
</html>`;

/**
 * Password Reset HTML Template
 * @param url
 * @param message
 */
const passwordResetTemplate = (url: string) => /* html */`<!DOCTYPE html>
<html lang="en-US">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>${t('resetPasswordEmail')}</title>
<meta name="description" content="${t('resetPasswordEmail')}" />
<style type="text/css">
a:hover {
text-decoration: underline !important;
}
</style>
</head>
<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">
<!--100% body table-->
<table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
style="@import url(https://fonts.googleapis.com/css?family=Rubik:300, 400, 500, 700|Open + Sans:300, 400, 600, 700); font-family: 'Open Sans', sans-serif;">
<tr>
<td>
<table style="background-color: #f2f3f8; max-width: 670px; margin: 0 auto;" width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
<tr>
<td style="height: 80px;">&nbsp;</td>
</tr>
<tr>
<td style="text-align: center;">
<img width="50%" max-width="300" style="-webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4wLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMDAgMTAwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQ0KCS5zdDF7ZmlsbDp1cmwoI1NWR0lEXzJfKTt9DQoJLnN0MntmaWxsOnVybCgjU1ZHSURfM18pO30NCgkuc3Qze2ZpbGw6dXJsKCNTVkdJRF80Xyk7fQ0KPC9zdHlsZT4NCjxnPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjM4LjgxNSIgeTE9IjU1OC4wNTUxIiB4Mj0iNTg3Ljk5NSIgeTI9IjU1OC4wNTUxIj4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzFCNzVCQyIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojMkUzMTkyIi8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTYxLjcsNjU0LjNjLTExLjksMC0yMi40LDcuOS0yNSwxOS4xSDI3My44bDI1NC44LTI1NC44aC05N2MtMi41LTUuNy04LjUtOS41LTE1LjEtOS41DQoJCWMtOS4yLDAtMTYuOCw3LjUtMTYuOCwxNi44YzAsOS4yLDcuNSwxNi44LDE2LjgsMTYuOGM2LjYsMCwxMi41LTMuOCwxNS4xLTkuNWg2MkwyMzguOCw2ODcuOWgyOTcuOGMyLjYsMTEuMiwxMy4yLDE5LjEsMjUsMTkuMQ0KCQljMTQuNSwwLDI2LjMtMTEuOSwyNi4zLTI2LjNDNTg4LDY2Ni4yLDU3Ni4xLDY1NC4zLDU2MS43LDY1NC4zeiBNNDE2LjUsNDM1LjFjLTUsMC05LjItNC4yLTkuMi05LjJjMC01LDQuMi05LjYsOS4yLTkuNg0KCQljNSwwLDkuNiw0LjYsOS42LDkuNkM0MjYuMiw0MzAuOSw0MjEuNiw0MzUuMSw0MTYuNSw0MzUuMXogTTU2MS43LDY5NS44Yy03LjksMC0xNS4xLTcuMy0xNS4xLTE1LjFjMC03LjksNy4yLTE0LjUsMTUuMS0xNC41DQoJCWM3LjksMCwxNC41LDYuNiwxNC41LDE0LjVDNTc2LjEsNjg4LjYsNTY5LjYsNjk1LjgsNTYxLjcsNjk1Ljh6Ii8+DQoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8yXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNDkuMDA1IiB5MT0iNDYxLjUwNSIgeDI9Ijc2MS4xODUiIHkyPSI0NjEuNTA1Ij4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0Y3OTQxRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRjE1QTI5Ii8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNzM0LjksNTQzLjRjLTEyLjUsMC0yMyw5LjItMjUuNywyMWgtNzlMNTk2LDU5OEg0MzMuMmwyNDQuNS0yNDQuNUg0MTIuMmwtMzMuNS0zNC4yaC03OC4zDQoJCWMtMi0xMS44LTEyLjUtMjAuNC0yNS43LTIwLjRjLTE0LjUsMC0yNS43LDExLjgtMjUuNywyNi4zYzAsMTMuOCwxMS4yLDI1LjYsMjUuNywyNS42YzExLjksMCwyMS03LjIsMjUtMTcuMWg3M2wyMSwyMWgtMzYuOA0KCQljLTIuNy03LjgtOS4yLTEyLjQtMTcuMS0xMi40Yy0xMC41LDAtMTguNCw4LjYtMTguNCwxOC41YzAsMTAuNSw3LjksMTguNCwxOC40LDE4LjRjNy44LDAsMTQuNC01LjIsMTcuMS0xMi4zaDQ4LjlsMC41LDAuNWgyMzcuMQ0KCQlsLTY1LjgsNjUuOEw0NDMuOSw1NjYuOWwtNDUuNiw0NS42aDIwNC4zbDAuMy0wLjNINjcyYzIsNy4zLDkuMiwxMS45LDE3LjEsMTEuOWMxMC41LDAsMTguNC03LjksMTguNC0xOC40DQoJCWMwLTkuOS03LjktMTguNC0xOC40LTE4LjRjLTcuOSwwLTE1LjEsNS4zLTE3LjEsMTIuNWgtNTYuOWwyMS4xLTIxLjVoNzQuM2MzLjMsMTAuNSwxMy4yLDE3LjEsMjQuNCwxNy4xDQoJCWMxNC41LDAsMjYuMy0xMS4yLDI2LjMtMjUuN1M3NDkuMyw1NDMuNCw3MzQuOSw1NDMuNHogTTI3NC43LDMzOS43Yy03LjksMC0xNC41LTcuMi0xNC41LTE0LjVjMC04LjYsNi42LTE1LjEsMTQuNS0xNS4xDQoJCWM4LjUsMCwxNS4xLDYuNSwxNS4xLDE1LjFDMjg5LjgsMzMyLjUsMjgzLjIsMzM5LjcsMjc0LjcsMzM5Ljd6IE0zMzkuOCwzNzEuM2MtNS45LDAtMTAuNS00LjYtMTAuNS0xMC41YzAtNiw0LjYtMTAuNSwxMC41LTEwLjUNCgkJYzYsMCwxMC41LDQuNiwxMC41LDEwLjVDMzUwLjQsMzY2LjcsMzQ1LjgsMzcxLjMsMzM5LjgsMzcxLjN6IE02ODkuMSw1OTUuOGM1LjksMCwxMC41LDQuNiwxMC41LDkuOWMwLDUuOS00LjYsMTAuNS0xMC41LDEwLjUNCgkJYy01LjksMC0xMC41LTQuNi0xMC41LTEwLjVDNjc4LjYsNjAwLjQsNjgzLjIsNTk1LjgsNjg5LjEsNTk1Ljh6IE03MzQuOSw1ODQuMmMtNy45LDAtMTUuMS02LjYtMTUuMS0xNC41DQoJCWMwLTcuOSw3LjItMTQuNSwxNS4xLTE0LjVjNy45LDAsMTQuNSw2LjYsMTQuNSwxNC41Qzc0OS4zLDU3Ny42LDc0Mi43LDU4NC4yLDczNC45LDU4NC4yeiIvPg0KCTxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfM18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iNDEyLjAxNSIgeTE9IjQ0MS45NDUiIHgyPSI3NjEuMTg1IiB5Mj0iNDQxLjk0NSI+DQoJCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMxQjc1QkMiLz4NCgkJPHN0b3AgIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6IzJFMzE5MiIvPg0KCTwvbGluZWFyR3JhZGllbnQ+DQoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTc2MS4yLDMxMi4xSDQ2My4zYy0yLjYtMTEuMi0xMy4yLTE5LjEtMjUtMTkuMWMtMTQuNSwwLTI2LjMsMTEuOS0yNi4zLDI2LjNjMCwxNC41LDExLjgsMjYuMywyNi4zLDI2LjMNCgkJYzExLjgsMCwyMi40LTcuOSwyNS0xOS4xaDI2Mi45bC05Mi4xLDkyLjFsLTE0LjUsMTQuNUw0ODUuOSw1NjYuOWwtMTQuNSwxNC41aDk3YzIuNSw1LjcsOC41LDkuNSwxNS4xLDkuNQ0KCQljOS4yLDAsMTYuOC03LjUsMTYuOC0xNi44YzAtOS4yLTcuNS0xNi44LTE2LjgtMTYuOGMtNi42LDAtMTIuNSwzLjgtMTUuMSw5LjVoLTYyTDc2MS4yLDMxMi4xTDc2MS4yLDMxMi4xeiBNNDM4LjMsMzMzLjgNCgkJYy03LjksMC0xNC41LTYuNi0xNC41LTE0LjVjMC03LjksNi42LTE1LjEsMTQuNS0xNS4xYzcuOSwwLDE1LjEsNy4zLDE1LjEsMTUuMUM0NTMuNSwzMjcuMiw0NDYuMiwzMzMuOCw0MzguMywzMzMuOHogTTU4My41LDU2NC45DQoJCWM1LDAsOS4yLDQuMiw5LjIsOS4yYzAsNS00LjIsOS42LTkuMiw5LjZjLTUsMC05LjYtNC42LTkuNi05LjZDNTczLjgsNTY5LjEsNTc4LjQsNTY0LjksNTgzLjUsNTY0Ljl6Ii8+DQoJPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF80XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMzguODI1IiB5MT0iNTM4LjQ5NSIgeDI9Ijc1MS4wMDUiIHkyPSI1MzguNDk1Ij4NCgkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0Y3OTQxRCIvPg0KCQk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRjE1QTI5Ii8+DQoJPC9saW5lYXJHcmFkaWVudD4NCgk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNzI1LjMsNjQ5LjFjLTExLjksMC0yMSw3LjItMjUsMTcuMWgtNzNsLTIxLTIxaDM2LjhjMi43LDcuOCw5LjIsMTIuNCwxNy4xLDEyLjRjMTAuNSwwLDE4LjQtOC42LDE4LjQtMTguNQ0KCQljMC0xMC41LTcuOS0xOC40LTE4LjQtMTguNGMtNy45LDAtMTQuNCw1LjItMTcuMSwxMi4zaC00OC45bC0wLjUtMC41SDM1Ni42bDUxLjMtNTEuM2wxNC41LTE0LjVsMTc5LjMtMTc5LjRIMzk3LjRsLTAuMywwLjNIMzI4DQoJCWMtMi03LjMtOS4yLTExLjktMTcuMS0xMS45Yy0xMC41LDAtMTguNCw3LjktMTguNCwxOC40YzAsOS45LDcuOSwxOC40LDE4LjQsMTguNGM3LjksMCwxNS4xLTUuMywxNy4xLTEyLjVoNTYuOWwtMjEuMSwyMS41aC03NC4zDQoJCWMtMy4zLTEwLjUtMTMuMi0xNy4xLTI0LjQtMTcuMWMtMTQuNSwwLTI2LjMsMTEuMi0yNi4zLDI1LjdzMTEuOCwyNi4zLDI2LjMsMjYuM2MxMi41LDAsMjMtOS4yLDI1LjctMjFoNzlMNDA0LDQwMmgxNjIuOA0KCQlsLTE2LjcsMTYuN0wzMjIuMyw2NDYuNWgyNjUuNWwzMy41LDM0LjJoNzguM2MyLDExLjgsMTIuNSwyMC40LDI1LjcsMjAuNGMxNC41LDAsMjUuNy0xMS44LDI1LjctMjYuMw0KCQlDNzUxLDY2MC45LDczOS44LDY0OS4xLDcyNS4zLDY0OS4xeiBNNjYwLjIsNjI4LjdjNS45LDAsMTAuNSw0LjYsMTAuNSwxMC41YzAsNi00LjYsMTAuNS0xMC41LDEwLjVjLTYsMC0xMC41LTQuNi0xMC41LTEwLjUNCgkJQzY0OS43LDYzMy4zLDY1NC4yLDYyOC43LDY2MC4yLDYyOC43eiBNMzEwLjksNDA0LjJjLTUuOSwwLTEwLjUtNC42LTEwLjUtOS45YzAtNS45LDQuNi0xMC41LDEwLjUtMTAuNWM2LDAsMTAuNSw0LjYsMTAuNSwxMC41DQoJCUMzMjEuNCwzOTkuNiwzMTYuOCw0MDQuMiwzMTAuOSw0MDQuMnogTTI2NS4xLDQ0NC44Yy03LjksMC0xNC41LTYuNi0xNC41LTE0LjVjMC03LjksNi42LTE0LjUsMTQuNS0xNC41YzcuOSwwLDE1LjEsNi42LDE1LjEsMTQuNQ0KCQlDMjgwLjMsNDM4LjIsMjczLDQ0NC44LDI2NS4xLDQ0NC44eiBNNzI1LjMsNjg5LjljLTguNSwwLTE1LjEtNi42LTE1LjEtMTUuMWMwLTcuMiw2LjYtMTQuNSwxNS4xLTE0LjVjNy45LDAsMTQuNSw3LjIsMTQuNSwxNC41DQoJCUM3MzkuOCw2ODMuMyw3MzMuMiw2ODkuOSw3MjUuMyw2ODkuOXoiLz4NCjwvZz4NCjwvc3ZnPg0K" title="logo" alt="logo" />
</td>
</tr>
<tr>
<td style="height: 20px;">&nbsp;</td>
</tr>
<tr>
<td>
<table width="95%" border="0" align="center" cellpadding="0" cellspacing="0" style=" max-width: 670px; background: #fff; border-radius: 3px;
text-align: center; -webkit-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); -moz-box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06); box-shadow: 0 6px 18px 0 rgba(0, 0, 0, 0.06);">
<tr>
<td style="height: 40px;">&nbsp;</td>
</tr>
<tr>
<td style="padding: 0 35px;">
<h1 style="color: #1e1e2d; font-weight: 500; margin: 0; font-size: 32px; font-family: 'Rubik', sans-serif;">You have requested to reset your password</h1>
<span style="display: inline-block; vertical-align: middle; margin: 29px 0 26px; border-bottom: 1px solid #cecece; width: 100px;"></span>
<p style="color: #455056; font-size: 15px; line-height: 24px; margin: 0;">
${t('cannotSendOldPassword')}
</p>
<a href="${url}" style=" background: #3f51b5; text-decoration: none !important; font-weight: 500; margin-top: 35px; color: #fff;
text-transform: uppercase; font-size: 14px; padding: 10px 24px; display: inline-block; border-radius: 50px; ">
${t('resetPassword')}
</a>
<br/>
<span style="height: 40px;">&nbsp;</span>
<p style="color: #455056; font-size: 15px; line-height: 24px; margin: 0;">
${t('passwordResetMessage')} :
<a href="${url}">${url}</a>
</p>
</td>
</tr>
<tr>
<td style="height: 40px;">&nbsp;</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="height: 20px;">&nbsp;</td>
</tr>
<tr>
<td style="height: 80px;">&nbsp;</td>
</tr>
</table>
</td>
</tr>
</table>
<!--/100% body table-->
</body>
</html>`;

const sendMail = async (mailOptions: Mail.Options) => {
  // Create mail transporter
  const transporter = createTransport({
    host: process.env.MAIL_HOST,
    port: +(process.env.MAIL_PORT || 465),
    secure: process.env.MAIL_SECURE === 'true',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // Check connection
  const connected = await transporter.verify();

  if (!connected) {
    throw new Error(t('unableToConnectToMailServer'));
  }

  // Send mail
  const mailResult = await transporter.sendMail(mailOptions);

  return mailResult;
};

export default {
  template,
  passwordResetTemplate,
  sendMail,
};