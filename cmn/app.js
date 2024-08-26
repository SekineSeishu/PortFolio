function adjustForDPI() {
  const dpi = window.devicePixelRatio;
  
  // ノートPCのDPIスケーリングに合わせてサイズや位置を調整
  if (dpi > 1) {
      document.querySelector('.object').style.transform = `scale(${1 / dpi})`;
  }
}

window.onload = adjustForDPI;
window.onresize = adjustForDPI;
