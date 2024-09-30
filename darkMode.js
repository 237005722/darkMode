/**
* 切换style版深色模式
**/
function switchDarkStyle(themeMode) {
  // document.documentElement获取文档的根元素head
  const head = document.documentElement.querySelector('head')
  const id = 'your-darkmode-style'

  // 使用document.querySelectorAll，防止重复创建style后有复数个
  const styles = document.querySelectorAll(`style#${id}`) || []
  if (themeMode !== 'dark') {
    styles.forEach(style => style.remove())
    return
  }

  const newStyle = document.createElement('style')
  newStyle.id = id
  newStyle.innerHTML = `
    @media screen {
      html {-webkit-transition : -webkit-filter 300ms linear;}
      html {
        -webkit-filter: invert(95%) hue-rotate(180deg) brightness(100%) contrast(100%) !important;
      }
      img, video, :not(object):not(body)>embed, object,
      iframe,
      svg image,
      [style*='background:url'], [style*='background-image:url'],
      [style*='background: url'], [style*='background-image: url'],
      [background],
      twitterwidget {
        -webkit-filter: invert(95%) hue-rotate(180deg) !important;
      }
      [style*='background:url'] *, [style*='background-image:url'] *,
      [style*='background: url'] *, [style*='background-image: url'] *,
      input,
      [background] * {
        -webkit-filter: none !important;
      }
      iframe:not([title='Disqus']):not([src*='ihlenndgcmojhcghmfjfneahoeklbjjh']) {
        background: white !important;
      }
      html {
        text-shadow: 0 0 0 !important;
        font-weight: normal !important;
      }
      *:-webkit-full-screen, *:-webkit-full-screen * {
        -webkit-filter: none !important;
      }
    }
  `
  head.appendChild(newStyle)
}
