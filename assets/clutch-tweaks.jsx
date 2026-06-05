/* CLUTCH — shared Tweaks panel (accent + light/dark). Loaded as text/babel. */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#8ecfe3",
  "theme": "dark"
}/*EDITMODE-END*/;

function ClutchTweaks(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(()=>{
    document.documentElement.style.setProperty('--accent', t.accent);
    document.documentElement.setAttribute('data-theme', t.theme);
  },[t.accent, t.theme]);
  return (
    <TweaksPanel>
      <TweakSection label="Theme" />
      <TweakRadio label="Mode" value={t.theme} options={['dark','light']}
        onChange={(v)=>setTweak('theme', v)} />
      <TweakSection label="Accent" />
      <TweakColor label="Accent color" value={t.accent}
        options={['#8ecfe3','#e9a23b','#e0563b','#5bc8c2','#d8d2c6']}
        onChange={(v)=>setTweak('accent', v)} />
    </TweaksPanel>
  );
}
ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<ClutchTweaks/>);
