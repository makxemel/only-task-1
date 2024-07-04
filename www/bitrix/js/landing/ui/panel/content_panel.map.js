{"version":3,"sources":["content_panel.js"],"names":["BX","namespace","addClass","Landing","Utils","removeClass","UI","Panel","Content","id","data","BasePanel","apply","this","arguments","layout","classList","remove","Object","freeze","type","isPlainObject","add","overlay","createOverlay","classHide","header","createHeader","title","createTitle","body","createBody","footer","createFooter","sidebar","createSidebar","content","createContent","scrollTarget","forms","Collection","FormCollection","buttons","ButtonCollection","sidebarButtons","closeButton","Button","BaseButton","className","onClick","hide","bind","attrs","Loc","getMessage","shouldAdjustTopPanelControls","Env","getInstance","getType","appendChild","subTitle","create","props","html","window","onwheel","wheelEventName","onmousewheel","init","rootWindow","PageObject","getRootWindow","addEventListener","onKeydown","view","then","frame","contentWindow","console","warn","scrollAnimation","scrollObserver","IntersectionObserver","onIntersecting","hidden","join","calculateTransitionDuration","diff","defaultDuration","parseInt","Math","min","scrollTo","container","element","Promise","resolve","elementTop","duration","defaultMargin","elementMarginTop","max","style","containerScrollTop","scrollTop","HTMLIFrameElement","offsetTop","scrollY","pos","top","abs","start","finish","easing","step","state","animate","setTimeout","getDeltaFromEvent","event","deltaX","deltaY","wheelDeltaX","wheelDeltaY","deltaMode","wheelDelta","x","y","prototype","constructor","__proto__","document","onMouseEnter","onMouseLeave","requestAnimationFrame","right","setTitle","isArray","forEach","item","appendFooterButton","isDomNode","items","isIntersecting","target","keyCode","stopPropagation","proxy","onMouseWheel","contains","currentTarget","unbind","preventDefault","delta","isShown","show","Top","disableHistory","disableDevices","Show","promise","enableHistory","enableDevices","Hide","appendForm","form","getNode","appendCard","card","observe","clear","clearContent","clearSidebar","innerHTML","value","button","appendSidebarButton"],"mappings":"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","file":"content_panel.map.js"}