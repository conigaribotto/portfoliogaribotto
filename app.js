const tabs = document.querySelector('#top-tabs>div')
function changeTab(){
    console.log

}
for(let i=0;<tabs.length;i++) {
const tab = tabs[i]
tab.addEventListener('click',changeTab, false)

}