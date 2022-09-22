import React, {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {VscAccount, VscBell, VscChevronDown, VscChromeClose, VscChromeMaximize, VscChromeMinimize, VscChromeRestore, VscClearAll, VscCollapseAll, VscEllipsis, VscFeedback, VscFilter, VscFolderOpened, VscGoToFile, VscMortarBoard, VscNewFile, VscRefresh, VscSearch, VscSettingsGear, VscSplitHorizontal, VscStarEmpty, VscWarning} from 'react-icons/vsc'
import {TbLayout, TbSquareToggle} from 'react-icons/tb'
import {TbSquareToggleHorizontal} from 'react-icons/tb'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight} from 'react-icons/ai'
import {BsDash, BsStarFill} from 'react-icons/bs'
import {RiCheckboxMultipleBlankFill, RiCloseCircleLine, RiTestTubeFill} from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { VscSourceControl } from 'react-icons/vsc'
import { VscDebugAlt } from 'react-icons/vsc'
import { VscFiles } from 'react-icons/vsc'
import { VscExtensions } from 'react-icons/vsc'
import { TbLayoutSidebarRight } from 'react-icons/tb'
import { TbLayoutSidebar } from 'react-icons/tb'
import {IoMdCheckbox} from 'react-icons/io'
import { useEffect } from 'react'
import { useRef } from 'react'
import ogo from '../img/ogo.png'
import line from '../img/line.png'
import linee from '../img/linee.png'
import star from '../img/star.png'





let useClickOutside = (handler) => {
  let domNode = useRef();


  
useEffect(() => {
  let maybeHandler = (event) => {
    if (!domNode.current.contains(event.target)){
      handler();
    }
  };
  document.addEventListener('mousedown', maybeHandler);

  return () => {
    document.removeEventListener('mousedown', maybeHandler);

  }
  
 
})

return domNode
}


const Home = () => {

  

  const [menu, setMenu] = useState('')



  let domNode = useClickOutside(() => {
    setMenu('');
  })

  const [sideMenu, setSideMenu] = useState('');
  const myRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', event => {
      if(!myRef.current.contains(event.target)) {
        setSideMenu('')
      }
    })
  })
 

     
    function uploadFiles()
  {
    document.getElementById('selectFile').click()
  }


  return (
    <div className='w-full bg-[#1e1e1e] my-1 mx-auto h-full max-h-[2000px] max-w-[1100px] '>
      <div className='row'>
        <div className='w-full text-white text-center h-[37px] flex max-w-[1100px] mx-auto bg-[#3c3c3c]'>

            <div className=''>
            <img src={ogo} alt='' className='my-[12px] mx-3 h-[17px]' />
            </div>
           <div>
           <ul className='flex text-[#c7c7c7] font justify-between '>
            <button className='my-[10px] text-[13px] hover:bg-[#454646] rounded px-2' onClick={() => setMenu('file')}>File</button>
            <button className='my-[10px] text-[13px] hover:bg-[#454646] rounded px-2' onClick={() => setMenu('edit')}>Edit</button>
            <button className='my-[10px] text-[13px] hover:bg-[#454646] rounded px-2' onClick={() => setMenu('selection')}>Selection</button>
            <button className='my-[10px] text-[13px] hover:bg-[#454646] rounded px-2' onClick={() => setMenu('view')}>View</button>
            <button className='my-[10px] text-[13px] hover:bg-[#454646] rounded px-2' onClick={() => setMenu('go')}>Go</button>
            <button className='my-[10px] text-[13px] hover:bg-[#454646] rounded px-2' onClick={() => setMenu('run')}>Run</button>
            <button className='my-[10px] text-[13px] hover:bg-[#454646] rounded px-2' onClick={() => setMenu('terminal')}>Terminal</button>
            <button className='my-[10px] text-[13px] hover:bg-[#454646] rounded px-2' onClick={() => setMenu('help')}>Help</button>
            </ul>
           </div>
          
        
           <div className='text-center pl-[50px] text-[#c7c7c7] mx-auto justify-between flex'>
              <AiOutlineArrowLeft id='file' className='my-[10px]'/>
              <div id='hov' className='ml-[-20px] top-[39px] text-[#adaead] float-left border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[140px]'>
                <p className='text-[10px] flex mx-2 font-bold'>Go Back (Alt+LeftArrow)</p>
              </div>
              <AiOutlineArrowRight id='file' className='my-[10px] mx-2' />
              <div id='hov' className='ml-[-20px] top-[39px] text-[#adaead] float-left border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[140px]'>
                <p className='text-[10px] flex mx-2 font-bold'>Go Forward (Alt+LeftArrow)</p>
              </div>
             <div id='file' className='w-[365px] border-[0.1px] border-[##828582] hover:bg-[#454646] mt-[5px] h-[28px] align-center my-[5px] flex text-center rounded-lg mx-auto'>
                <p className=' mx-auto flex'><VscSearch className=' my-[5px]' />vscode</p>
             </div>
             <div id='hov' className='ml-[110px] top-[39px] text-[#adaead] float-left border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[285px]'>
                <p className='text-[10px] flex mx-2 font-bold'>Search vscode(Ctrl+P) <VscChromeMinimize className='mt-1'/> Get Started - Visual Studio Code</p>
              </div>
           </div>
            <div className='flex text-[#828582] font justify-between'>
              <TbLayoutSidebar id='file' className='my-[10px] hover:bg-[#454646] stroke-2 mx-1'/>
              <div id='hov' className='ml-[10px] top-[39px] text-[#adaead] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[175px]'>
                <p className='text-[10px] flex mx-2 font-bold'>Toggle Primary Side bar (Ctrl+B)</p>
              </div>
              <TbSquareToggleHorizontal id='file' className='my-[10px] hover:bg-[#454646] mx-1' />
              <div id='hov' className='ml-[10px] top-[39px] text-[#adaead] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[175px]'>
                <p className='text-[10px] flex mx-2 font-bold'>Toggle Panel (Ctrl+J)</p>
              </div>
              <TbLayoutSidebarRight id='file' className='my-[10px] hover:bg-[#454646] mx-1'/>
              <div id='hov' className='ml-[10px] top-[39px] text-[#adaead] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[175px]'>
                <p className='text-[10px] flex mx-2 font-bold'>Toggle Secondary Side bar</p>
              </div>
              <p className='my-[5px] hover:bg-[#454646] mx-0'>|</p>
              <TbLayout id='file' className='my-[10px] hover:bg-[#454646] mx-1' />
              <div id='hov' className='ml-[10px] top-[39px] text-[#adaead] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[175px]'>
                <p className='text-[10px] flex mx-2 font-bold'>Customize Layout</p>
              </div>
            </div>
            
           
            <div className='flex ml-2 text-[#bfbfbf] font justify-between'>
            <button className='hover:bg-[#626262]'><VscChromeMinimize className='my-[10px] stroke-0 mx-3' /></button>
            <button className='hover:bg-[#626262]'><VscChromeMaximize className='my-[10px] mx-3' /></button>
            <button className='hover:bg-[#626262]'><VscChromeRestore className='my-[10px] hidden mx-3' /></button>
            <button className='hover:bg-[#d01a1a]'><VscChromeClose className='my-[10px] mx-3' /></button>
         
            </div>

          </div>
          <div className='w-full text-white text-center font justify-between bg-[#252526] h-[30px] flex max-w-[1100px] mx-auto bg-'>
           
              <p className='pl-[45px] pt-[5px] bg-[#1e1e1e] text-[14px] flex'><img src={ogo} alt='' className='my-[4px] mx-1 h-[14px]' />Get Started <VscChromeClose className='my-[6px] mx-1 h-3 font-bold mt-[5px]'/></p>
              <div className='flex text-[#bfbfbf]'>
                <VscSplitHorizontal id='file' className='m-1 my-2 stroke-1 hover:bg-[#454646]' />
                <div id='hovv' className='ml-[-20px] top-[74px] text-[#000000] border-[1px] absolute z-20 border-[#5d5f5d] h-9 w-[175px]'>
                <p className='text-[10px] flex mx-2 font-bold'>Split Editor Right(Ctrl+/)[Alt] Split Editor Down</p>
              </div>
                <VscEllipsis id='file' className='m-2 hover:bg-[#454646]' />
                 <div id='hovv' className='ml-[10px] top-[74px] text-[#000000] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[95px]'>
                <p className='text-[10px] flex mx-2 font-bold'>More Actions</p>
              </div>
              </div>
          </div>
        
      </div>
      {menu === 'file' && <div ref={domNode} className='bg-[#303031] absolute leading-6 mx-auto top-[42px] ml-[35px] font-bold rounded-md text-[#cfcfcf] text-[11px] z-20 h-full max-h-[400px] w-full max-w-[220px]'>
           <ul>
            <li className='px-5 justfy-between mt-2  hover:bg-blue-900'>New Text File &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+N</li>
            <li className='px-5 hover:bg-blue-900'>New File  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+Alt+Windows+N</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>New Window</li>
            <li className='px-5 hover:bg-blue-900'>Open File</li>
            <li className='px-5 hover:bg-blue-900'>Open Folder</li>
            <li className='px-5 hover:bg-blue-900'>Open Workspace from file</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Open Recent</li>
            <li className='px-5 hover:bg-blue-900'>Add to Workspace</li>
            <li className='px-5 hover:bg-blue-900'>Save Workspace As</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Duplicate Workspace</li>
            <li className='px-5 hover:bg-blue-900'>Save</li>
            <li className='px-5 hover:bg-blue-900'>Save As  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+Shift+S</li>
            <li className='px-5 hover:bg-blue-900'>Save All</li>
            <li className='px-5 hover:bg-blue-900'>Auto Save</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Preferences</li>
            <li className='px-5 hover:bg-blue-900'>Revert File</li>
           </ul>
           </div>}

           {menu === 'edit' && <div ref={domNode} className='bg-[#303031] absolute leading-6 mx-auto rounded-md font-bold text-[#cfcfcf] text-[11px] top-[42px] ml-[60px] z-20 h-full max-h-[300px] shadow-sm max-w-[220px]'>
           <ul>
            <li className='px-5 justfy-between mt-2 hover:bg-blue-900'>Undo  Ctrl U</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Redo</li>
            <li className='px-5  hover:bg-blue-900'>Cut</li>
            <li className='px-5  hover:bg-blue-900'>Copy</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Paste</li>
            <li className='px-5 hover:bg-blue-900'>Find</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Replace</li>
            <li className='px-5 hover:bg-blue-900'>Find in Files</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Replace in Files</li>
            <li className='px-5 hover:bg-blue-900'>Toggle Line Comment </li>
            <li className='px-5 hover:bg-blue-900'>Toggle Block Comment</li>
            <li className='px-5 hover:bg-blue-900'>Emmet: Expand Abbrievation</li>
           </ul>
           </div>}
           {menu === 'selection' && <div ref={domNode} className='bg-[#303031] absolute text-[#cfcfcf] leading-6 font-bold mx-auto rounded-md text-[11px] top-[42px] ml-[110px] z-20 h-full max-h-[300px] w-full shadow-sm max-w-[260px]'>
           <ul>
            <li className='px-5 justfy-between mt-2 hover:bg-blue-900'>Selection All</li>
            <li className='px-5 hover:bg-blue-900'>Expand secton</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Shrink Slection</li>
            <li className='px-5 hover:bg-blue-900'>Copy Line Up</li>
            <li className='px-5 hover:bg-blue-900'>Copy Line Down</li>
            <li className='px-5 hover:bg-blue-900'>Move Line Up</li>
            <li className='px-5  hover:bg-blue-900'>Move Line Down</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Duplicate Selection</li>
            <li className='px-5 hover:bg-blue-900'>Replace in Files</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Toggle Line Comment </li>
            <li className='px-5 hover:bg-blue-900'>Toggle Block Comment</li>
            <li className='px-5 hover:bg-blue-900'>Emmet: Expand Abbrievation</li>
           </ul>
           </div>}

           {menu === 'view' && <div ref={domNode} className='bg-[#303031] absolute text-[#cfcfcf] leading-6 mx-auto font-bold rounded-md text-[11px] top-[42px] ml-[182px] z-20 h-full max-h-[400px] w-full shadow-sm max-w-[300px]'>
           <ul>
            <li className='px-5 justfy-between mt-2 hover:bg-blue-900'>Command palette</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Open View...</li>
            <li className='px-5  hover:bg-blue-900'>Appearance</li>
            <li className='px-5  border-b border-[#636464] hover:bg-blue-900'>Editor Layout</li>
            <li className='px-5 hover:bg-blue-900'>Explorer</li>
            <li className='px-5 hover:bg-blue-900'>Search</li>
            <li className='px-5  hover:bg-blue-900'>Source Control</li>
            <li className='px-5  hover:bg-blue-900'>Run</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Extensions</li>
            <li className='px-5  hover:bg-blue-900'>Problems</li>
            <li className='px-5 hover:bg-blue-900'>Output</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Termnal</li>
            <li className='px-5 hover:bg-blue-900'>Word Wrap</li>
            <li className='px-5 hover:bg-blue-900'>Minimap</li>
            <li className='px-5 hover:bg-blue-900'>Breadcrumbs</li>
           </ul>
           </div>}

           {menu === 'go' && <div ref={domNode} className='bg-[#303031] absolute text-[#cfcfcf] leading-6 mx-auto font-bold rounded-md text-[11px] top-[42px] ml-[225px] z-20 h-full max-h-[400px] w-full shadow-sm max-w-[300px]'>
           <ul>
            <li className='px-5 justfy-between mt-2 hover:bg-blue-900'>Command palette</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Open View...</li>
            <li className='px-5  hover:bg-blue-900'>Appearance</li>
            <li className='px-5  border-b border-[#636464] hover:bg-blue-900'>Editor Layout</li>
            <li className='px-5 hover:bg-blue-900'>Explorer</li>
            <li className='px-5 hover:bg-blue-900'>Search</li>
            <li className='px-5  hover:bg-blue-900'>Source Control</li>
            <li className='px-5  hover:bg-blue-900'>Run</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Extensions</li>
            <li className='px-5  hover:bg-blue-900'>Problems</li>
            <li className='px-5 hover:bg-blue-900'>Output</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Termnal</li>
            <li className='px-5 hover:bg-blue-900'>Word Wrap</li>
            <li className='px-5 hover:bg-blue-900'>Minimap</li>
            <li className='px-5 hover:bg-blue-900'>Breadcrumbs</li>
           </ul>
           </div>}
           {menu === 'run' && <div ref={domNode} className='bg-[#303031] absolute text-[#cfcfcf] leading-6 mx-auto font-bold rounded-md text-[11px] top-[42px] ml-[258px] z-20 h-full max-h-[400px] w-full shadow-sm max-w-[300px]'>
           <ul>
            <li className='px-5 justfy-between mt-2 hover:bg-blue-900'>Command palette</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Open View...</li>
            <li className='px-5  hover:bg-blue-900'>Appearance</li>
            <li className='px-5  border-b border-[#636464] hover:bg-blue-900'>Editor Layout</li>
            <li className='px-5 hover:bg-blue-900'>Explorer</li>
            <li className='px-5 hover:bg-blue-900'>Search</li>
            <li className='px-5  hover:bg-blue-900'>Source Control</li>
            <li className='px-5  hover:bg-blue-900'>Run</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Extensions</li>
            <li className='px-5  hover:bg-blue-900'>Problems</li>
            <li className='px-5 hover:bg-blue-900'>Output</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Termnal</li>
            <li className='px-5 hover:bg-blue-900'>Word Wrap</li>
            <li className='px-5 hover:bg-blue-900'>Minimap</li>
            <li className='px-5 hover:bg-blue-900'>Breadcrumbs</li>
           </ul>
           </div>}

           {menu === 'terminal' && <div ref={domNode} className='bg-[#303031] absolute text-[#cfcfcf] leading-6 mx-auto font-bold rounded-md text-[11px] top-[42px] ml-[296px] z-20 h-full max-h-[400px] w-full shadow-sm max-w-[300px]'>
           <ul>
            <li className='px-5 justfy-between mt-2 hover:bg-blue-900'>Command palette</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Open View...</li>
            <li className='px-5  hover:bg-blue-900'>Appearance</li>
            <li className='px-5  border-b border-[#636464] hover:bg-blue-900'>Editor Layout</li>
            <li className='px-5 hover:bg-blue-900'>Explorer</li>
            <li className='px-5 hover:bg-blue-900'>Search</li>
            <li className='px-5  hover:bg-blue-900'>Source Control</li>
            <li className='px-5  hover:bg-blue-900'>Run</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Extensions</li>
            <li className='px-5  hover:bg-blue-900'>Problems</li>
            <li className='px-5 hover:bg-blue-900'>Output</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Termnal</li>
            <li className='px-5 hover:bg-blue-900'>Word Wrap</li>
            <li className='px-5 hover:bg-blue-900'>Minimap</li>
            <li className='px-5 hover:bg-blue-900'>Breadcrumbs</li>
           </ul>
           </div>}

           {menu === 'help' && <div ref={domNode} className='bg-[#303031] absolute text-[#cfcfcf] leading-6 mx-auto font-bold rounded-md text-[11px] top-[42px] ml-[364px] z-20 h-full max-h-[400px] w-full shadow-sm max-w-[300px]'>
           <ul>
            <li className='px-5 justfy-between mt-2 hover:bg-blue-900'>Get Started</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Show all Command &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ctrl+Shft+P</li>
            <li className='px-5  hover:bg-blue-900'>Documentation</li>
            <li className='px-5  border-b border-[#636464] hover:bg-blue-900'>Editor Layout</li>
            <li className='px-5 hover:bg-blue-900'>Explorer</li>
            <li className='px-5 hover:bg-blue-900'>Search</li>
            <li className='px-5  hover:bg-blue-900'>Source Control</li>
            <li className='px-5  hover:bg-blue-900'>Run</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Extensions</li>
            <li className='px-5  hover:bg-blue-900'>Problems</li>
            <li className='px-5 hover:bg-blue-900'>Output</li>
            <li className='px-5 border-b border-[#636464] hover:bg-blue-900'>Termnal</li>
            <li className='px-5 hover:bg-blue-900'>Word Wrap</li>
            <li className='px-5 hover:bg-blue-900'>Minimap</li>
            <li className='px-5 hover:bg-blue-900'>Breadcrumbs</li>
           </ul>
           </div>}

        <div className='h-full z-0 mr-10 py-4 text-center absolute top-[40px] justify-between max-h-[575px] bg-[#333333] text-white w-[40px]'>
        <div className=' text-[#828582]'>
         <VscFiles id='file' className=' hover:text-white mx-3 h-6 stroke-1' onClick={() =>setSideMenu('files')}/>
         <div id='hov' className='ml-10 top-[22px] text-[#adaead] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[115px]'>
          <p className='text-[10px] font-bold'>Explorer (Ctrl+Shift+E)</p>
          
        </div>
        {sideMenu === 'files' && <div ref={myRef}  className='bg-[#282828] absolute top-[1px] text-left w-[146px] leading-[14px] font ml-10 text-[11px] text-[#cbcbcb] h-[580px]'>
          <p className='text-[9px] flex px-4 pt-2 '>EXPLORER &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <VscEllipsis className='mt-[3px]'/></p>
          <p className='text-[10px] flex font-bold my-3'><VscChevronDown className='w-4'/>NO FOLDER OPENED</p>
          <p className='px-4'>You have not yet opened a folder.</p>
          <button className='bg-blue-500 my-2 mx-4 h-6 rounded-[2px] w-[100px] text-white'>Open Folder</button>
          <p className='px-4'>Opening a folder will close all currently open editors. To keep them open, <span className='text-blue-500'>add a folder</span> instead</p>
          <p className='my-2 px-4'>You can clone a repository locally.</p>
          <button className='bg-blue-500 mb-2 mx-4  h-6 rounded-[2px] w-[100px]  text-white'>Clone Repository</button>
          <p className='px-4'>To learn more about how to use git and source control in Vs code <span className='text-blue-500'>read our docs.</span></p>
        </div>}
    
         <VscSearch id='file' className='hover:text-white my-[14px] mx-3 h-6 stroke-1' onClick={() => setSideMenu('search')} />
         <div id='hov' className='ml-10 top-[58px] text-[#adaead]  border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[115px]'>
          <p className='text-[10px] font-bold'>Search (Ctrl+Shift+F)</p>
          
        </div>
        {sideMenu === 'search' && <div ref={myRef}  className='bg-[#282828] absolute top-[1px] leading-[14px] w-[146px] font ml-10 text-[11px] text-[#cbcbcb] h-[580px]'>
          <p className='text-[9px] w-[112px] flex mx-auto mt-2'>SEAR.. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<VscRefresh className='mt-[2px]'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<VscClearAll className='mt-[2px]'/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<VscNewFile className='mt-[2px]'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<VscCollapseAll className='mt-[3px]'/></p>
          <button className='bg-[#484747] my-0 mx-auto h-6  w-[116px] text-white'>Search &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aa </button>
          <button className='bg-[#484747] my-2 mx-auto h-6  w-[116px] text-white'>Replace &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AB </button>
          <p className='px-4'>You have not opened or specified a folder. Only open files are currently searched - <span className='text-blue-500'>Open Folder</span></p>
        </div>}

         <VscSourceControl id='file' className='hover:text-white mx-3 h-6 my-[14px]  stroke-1 ' onClick={() => setSideMenu('control')}/>
         <div id='hov' className='ml-10 top-[95px] text-[#adaead] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[148px]'>
          <p className='text-[10px] font-bold'>Source Control (Ctrl+Shift+G)</p>
          
        </div>
        {sideMenu === 'control' && <div ref={myRef}  className='bg-[#282828] absolute top-[1px] text-left w-[146px] leading-[14px] font ml-10 text-[11px] text-[#cbcbcb] h-[580px]'>
          <p className='text-[9px] flex px-4 pt-2 '>SOURCE CONTROL</p>
          <p className='px-4 my-3'>In order to use git features, you can open a folder containing a git repository or clone from a URL.</p>
          <button className='bg-blue-500 my-2 mx-4 h-6 rounded-[2px] w-[100px] text-white'>Open Folder</button>
          <button className='bg-blue-500 mb-2 mx-4  h-6 rounded-[2px] w-[100px]  text-white'>Clone Repository</button>
          <p className='px-4 float-left'>To learn more about how to use git and source control in Vs code <span className='text-blue-500'>read our docs.</span></p>
        </div>}

         <VscDebugAlt id='file' className='hover:text-white my-[14px] mx-3 h-6 stroke-1'onClick={() => setSideMenu('run')}/>
         <div id='hov' className='ml-10 top-[130px] text-[#adaead] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[155px]'>
          <p className='text-[10px] font-bold'>Run and Debug (Ctrl+Shift+D)</p>
          
        </div>
        {sideMenu === 'run' && <div ref={myRef} className='bg-[#282828] absolute top-[1px] text-left w-[146px] leading-[14px] font ml-10 text-[11px] text-[#cbcbcb] h-[580px]'>
          <p className='text-[9px] flex px-4 pt-2 '>RUN AND DEBUG: R.. &nbsp;&nbsp;&nbsp;<VscEllipsis className='mt-[3px]'/></p>
          <p className='px-4 my-3'> <span className='text-blue-500'>Open a file </span>which can be debugged or run.</p>
          <button className='bg-blue-500 my-2 mx-4 h-6 rounded-[2px] w-[100px] text-white'>Run and Debug</button>
          <p className='px-4'>To customize Run and Debug,  <span className='text-blue-500'>open a folder</span> and create a launch.json file.</p>
          <p className='text-blue-500 my-2 px-4'> Show all automatic debug configurations.</p>
        </div>}

         <VscExtensions id='file' className='hover:text-white my-[14px] mx-3 h-6 stroke-1' onClick={() => setSideMenu('extension')}/>
         <div id='hov' className='ml-10 top-[170px] text-[#adaead] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[138px]'>
          <p className='text-[10px] font-bold'>Extensions (Ctrl+Shift+X)</p>
        
        </div>
        {sideMenu === 'extension' && <div ref={myRef}  className='bg-[#282828] absolute top-[1px] leading-[14px] w-[146px] font ml-10 text-[11px] text-[#cbcbcb] h-[580px]'>
          <p className='text-[9px] w-[112px] flex mx-auto mt-2'>EXTE.. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<VscFilter className='mt-[2px]'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<VscRefresh className='mt-[2px]'/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<VscClearAll className='mt-[2px]'/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;<VscEllipsis className='mt-[3px]'/></p>
          <button className='bg-[#484747] my-0 mx-auto h-6  w-[116px] text-white'>Search Extensions in..</button>
        </div>}
       
          <VscAccount id='file' className='hover:text-white my-[14px] h-6 mt-[300px] mx-3 stroke-1 ' />
          <div id='hov' className='ml-10 top-[495px] text-[#adaead] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[55px]'>
          <p className='text-[10px] font-bold'>Accounts</p>
        
        </div>
          <VscSettingsGear id='file' className='hover:text-white my-[14px] h-6 mx-3 stroke-1 ' />
          <div id='hov' className='ml-10 top-[535px] text-[#adaead] border-[1px] absolute z-20 border-[#5d5f5d] h-5 w-[55px]'>
          <p className='text-[10px] font-bold'>Manage</p>
        
        </div>
         </div>
        
        </div>
       
        
        <div className='mx-auto max-w-[700px] mt-20 text-white'>
        <p className='text-[30px] text-[#cfcfcf]'>Visual Studio Code</p>
      <p className='text-[22px] text-[#949694]'>Editing evolved</p>
        </div>
    <div className='grid grid-flow-col mx-auto py-2 max-w-[700px]'>
     <div className='w-full text-white mx-auto'>
      <p className='mt-2'>Start</p>
      <button className='text-blue-500 flex text-[11px]' onClick={() => uploadFiles.bind}><VscNewFile className=' mt-1 mr-1'/>New File</button>
      <input id='selectFile' type='file' style={{display:"none"}} ></input>
       <p className='text-blue-500 flex text-blue-500flex text-[11px]'><VscGoToFile className='mr-1 mt-1 '/>Open File</p>
      <p className='text-blue-500 flex text-[11px]'><VscFolderOpened className='mr-1 mt-1 '/>Open Folder</p>
       <p className='text-blue-500 flex text-[11px]'><VscSourceControl className='mr-1 mt-1 '/>Clone Git Repository...</p>
      <div>
      <p className='mt-2'>Recent</p>
      <p className='flex text-xs'><a href='#' className='mr-1 text-blue-500' >vscode </a> C:\Users\NEW USER</p>
      <p className='flex text-xs'><a href='#' className='mr-1 text-blue-500' >vscode </a> C:\Users\NEW USER</p>
      <p className='flex text-xs'><a href='#' className='mr-1 text-blue-500' >vscode </a> C:\Users\NEW USER</p>
      </div>
     </div>
     <div className='text-[#cfcfcf] ml-28'> 
      <p className='mx-5'>Walkthroughs</p>
      <div id='file' className=' rounded-md bg-[#252526] hover:bg-[#333434]  h-full w-full mx-auto max-h-[55px] max-w-[350px]'>
        {/* <VscStarEmpty className='mt-1 mr-1'/> */}
        <img src={star} alt=''  className='h-4'/>
        <h2 className='text-xs mx-4 font-bold'>Get Started with VS code</h2>
        <p className='text-[10px] py-[1.3px] mx-4'>Discover the best customizations to make VS Code yours</p>
        <img src={linee} alt='' />
      </div>
      <VscChromeClose id='hovvv' className='absolute bg-opacity-0 z-20 ml-[350px] h-3 top-[263px]'/>
      <div id='file' className='rounded-md my-4 bg-[#252526] hover:bg-[#333434]  h-full w-full mx-auto max-h-[55px] max-w-[350px]'>
      <img src={star} alt='' className='h-4'/>
        <h2 className='text-xs mx-4 font-bold'>Learn the Fundamentals</h2>
        <p className='text-[10px] py-[1.5px] mx-4'>jump right into VS code and get an Overview of the must-have features.</p>
        <img src={line} alt='' />
      </div>
      <VscChromeClose id='hovvv' className='absolute bg-opacity-0 z-20 ml-[350px] h-3 top-[335px]'/>
      <div id='file' className='rounded-md bg-[#252526] hover:bg-[#333434]  h-full w-full mx-auto max-h-[35px] max-w-[350px]'>
        <h2 className='font-bold mx-4 py-[7px] text-xs flex'><VscMortarBoard className='mt-1 mr-1'/> Boost your Productivity</h2>
        <img src={linee} alt='' className=''/>
      </div>
      <VscChromeClose id='hovvv' className='absolute bg-opacity-0 z-20 ml-[350px] h-3 top-[405px]'/>
     </div>
    </div>
    
    <p className='mx-auto mt-[140px] text-white text-xs flex max-w-[250px]'> <IoMdCheckbox className='my-[2px] text-[13px]'/> Show welcome page on startup</p>
    <div className='bg-[#68217a] w-full z-40 grid grid-flow-col justify-between relative max-w-[1100px] h-[27px]'>
      <div className='grid grid-flow-col w-[90px]'>
      <p className='flex ml-3 text-sm text-white'><RiCloseCircleLine className='mt-[3px] mx-1' />0</p>
      <p className='flex mr-10 float-left text-sm text-white'><VscWarning className='mt-[3px] mx-1'/> 0</p>
      </div>
      <div className=' grid grid-flow-col w-[90px]'>
      <VscFeedback className=' text-sm text-white mt-[3px]  ' />
      <VscBell className='text-sm text-white mt-[3px] mx-1'/> 
      </div>
    </div>

  </div> 

  )
}

export default Home