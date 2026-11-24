document.addEventListener('DOMContentLoaded',()=>{
 const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
 if(menu&&nav) menu.addEventListener('click',()=>nav.classList.toggle('open'));
 const items=document.querySelectorAll('.reveal');
 const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('shown');io.unobserve(e.target)}}),{threshold:.12});
 items.forEach(el=>io.observe(el));
 document.addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--mx',e.clientX+'px');document.documentElement.style.setProperty('--my',e.clientY+'px')});
});

// ZYPER CLOUD custom VPS plan estimator
(() => {
  const ids = ['ram','cpu','disk','bandwidth'];
  const get = id => document.getElementById(id + 'Range');
  if (!get('ram')) return;
  const formatINR = n => '₹' + Math.round(n).toLocaleString('en-IN');
  const formatUSD = n => '$' + n.toFixed(2);
  function update() {
    const ram = +get('ram').value, cpu = +get('cpu').value;
    const disk = +get('disk').value, bandwidth = +get('bandwidth').value;
    document.getElementById('ramValue').textContent = ram + ' GB';
    document.getElementById('cpuValue').textContent = cpu + ' Cores';
    document.getElementById('diskValue').textContent = disk + ' GB';
    document.getElementById('bandwidthValue').textContent = bandwidth + ' TB';
    // Indicative formula: base + selected resource increments.
    const inr = 99 + ram * 75 + cpu * 85 + disk * 2 + bandwidth * 35;
    const usd = inr / 85;
    document.getElementById('customInr').innerHTML = formatINR(inr) + ' <small>/ month</small>';
    document.getElementById('customUsd').textContent = formatUSD(usd) + ' / month';
    const specs = `${ram} GB RAM · ${cpu} CPU · ${disk} GB SSD · ${bandwidth} TB bandwidth`;
    document.getElementById('customSpecs').textContent = specs;
    const subject = encodeURIComponent('Custom VPS enquiry');
    const body = encodeURIComponent(`Hello ZYPER CLOUD, I am interested in this custom VPS plan:\n${specs}\nEstimated price: ${formatINR(inr)} / ${formatUSD(usd)} per month.\nPlease confirm availability and final pricing.`);
    document.getElementById('customOrder').href = `mailto:?subject=${subject}&body=${body}`;
  }
  ids.forEach(id => get(id).addEventListener('input', update));
  update();
})();
