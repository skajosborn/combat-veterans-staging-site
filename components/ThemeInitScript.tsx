/** Runs before paint to apply saved theme and avoid flash. */
export default function ThemeInitScript() {
  const code = `
(function(){
  try {
    var k='cvc-theme', s=localStorage.getItem(k);
    var d=document.documentElement;
    if(s==='light'){ d.classList.remove('dark'); }
    else if(s==='dark'){ d.classList.add('dark'); }
    else { d.classList.remove('dark'); }
  } catch(e) { document.documentElement.classList.remove('dark'); }
})();`
  return <script dangerouslySetInnerHTML={{ __html: code }} />
}
