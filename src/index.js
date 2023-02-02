import data from './data'
import './make.css'


function copyEmail() {
    let text = document.querySelector('#mail-input')
    text.select()
    text.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(text.value)
    document.querySelector('#copy').classList.remove('fa-copy')
    document.querySelector('#copy').classList.add('fa-check')
    document.querySelector('#myTooltip').innerText = "Copied!"
}


let main = document.querySelector('#main')

function fillMain() {
    let template = ``
    data.forEach((e) => {
        let t = ` <section  class="bg-myLight-700 dark:bg-gradient-to-b dark:from-mySpace-200 dark:to-mySpace-400 dark:text-myDark-100 h-80 mt-4 relative mx-auto w-80  md:w-80 lg:max-w-xl hide mx-auto odd:delay-200 even:delay-500 border-solid border-2 rounded border-red-400 text-slate-900">
              <div class="mt-5">
  
                <div class="bg-myLight-600 dark:bg-gradient-to-b dark:from-myDark-500 dark:to-myDark-900 dark:shadow-md dark:shadow-black rounded w-40 h-14 absolute -top-5 bg-slate-200 font-semibold mx-20 mb-3  text-center align-content-center align-middle">              
                  <div class="mt-3 text-lg">
                    ${e.name}
                  </div>
                </div>
  
                <div class="mt-5"> 
  
                  <div class="font-semibold mx-8 mt-12 mb-2 text-center">
                    <i class="fa-solid fa-circle-info text-mySpace-500"></i>
                    ${e.desc}
                  </div>
  
                  <div class="mx-10  mb-2  text-center">
                    <i class="fa-solid fa-layer-group text-mySpace-500"></i>
                    ${e.technologies}
                  </div>
  
                  <div class="mx-3 mt-0.5 flex absolute top-2 right-0.5 mb-2 text-center">
                    <div class="mr-2 ml-auto font-semibold proportional-nums">
                      ${e.traffic}
                    </div>
                    <div>
                      <i class="fa-solid fa-users text-mySpace-500"></i>
                    </div>
                  </div>
  
                  <div class="mx-3 mt-0.5 flex absolute top-2 left-0.5 mb-2 text-center ">
                    <div>
                      <i class="fa-solid fa-calendar-days text-mySpace-500"></i>
                    </div>
                    <div class="ml-2 mr-auto font-semibold proportional-nums">
                      ${e.date2}
                    </div>
                  </div>
  
                  <div class="mx-10 mb-2  text-center grid grid-flow-cols">
                    <div> 
                      <i class="fa-brands fa-github text-mySpace-500"></i>
                      <a aria-label="github repository link" class="link-hover ${e.githubLink != "" ? "" : "disabled-link"}" target="_blank" href="${e.githubLink != "" ? e.githubLink : "#"}">GitHub</a>
                    </div>
                    <div> 
                      <i class="fa-brands fa-gitlab text-mySpace-500"></i>
                      <a aria-label="gitlab repository link" class="link-hover ${e.gitlabLink != "" ? "" : "disabled-link"} "  target="_blank" href="${e.gitlabLink != "" ? e.gitlabLink : "#"}">GitLab </a>
                    </div>
                  </div>
                  
                  <div class="">
                    <div class="absolute bottom-0 inset-x-0 text-center">
                      <button type="button" class=" transition-settings hover:-translate-y-2 bg-red-400 hover:-translate-x-2 hover:shadow-lg hover:shadow-rose-700 hover:bg-rose-400 duration-200 w-16 text-white p-2 mx-2 mx-auto mb-3 text-center hover:cursor-pointer ${e.testLink == "" ? "disabled-gray" : ""}">    
                        <a aria-label="test link to access project" href="${e.testLink != "" ? e.testLink : "#"}">Test</a>
                      </button>
                      <button type="button"  class=" bg-black transition-settings hover:translate-x-2 hover:-translate-y-2   hover:shadow-gray-700 hover:shadow-lg w-16 text-white p-2 mx-2 duration-200 mx-auto mb-3 text-center hover:cursor-pointer ${e.liveLink == "" ? "disabled-gray" : ""}">    
                        <a aria-label="public link to access project" href="${e.liveLink != "" ? e.liveLink : "#"}">Live</a>
                      </button>
                    </div>
                  </div>
  
                </div>
              </div>
            </section>`

        main.innerHTML += t;
    })

}


let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        //console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})



if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}



function toggleTheme() {
    if (document.querySelector('#hide-checkbox').checked) {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
    } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
    }
}

function initTheme() {
    if (!localStorage.theme) {
        localStorage.theme = "light"
    }
    if (localStorage.theme == "light") {
        document.querySelector('#hide-checkbox').checked = true
        toggleTheme()
    } else {
        document.querySelector('#hide-checkbox').checked = false
        toggleTheme()
    }
}


function increaseDownloadCount(){
  document.querySelector("#download-cv").addEventListener('click', () => {
    console.log('counted')
  }
  )
}


fillMain()
initTheme()
document.querySelector('#hide-checkbox').addEventListener('click', toggleTheme)
document.querySelector("#copy-btn").addEventListener('click', copyEmail)
let hiddenElements = document.querySelectorAll('.hide')
hiddenElements.forEach((el) => observer.observe(el))
increaseDownloadCount()