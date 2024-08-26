function adjustForDPI() {
  const dpi = window.devicePixelRatio;
  
  // ノートPCのDPIスケーリングに合わせてサイズや位置を調整
  if (dpi == 1.25) {
    document.querySelectorAll('.object').forEach(element => {
    Element.style.transform = 'scale(0.8)';
    Element.style.transformOrigin = 'top left';
    });
  }
}

window.onload = adjustForDPI;
window.onresize = adjustForDPI;
