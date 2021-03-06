
import React from 'react';
import * as AiIcons from 'react-icons/ai';
import {RiKakaoTalkFill , RiDonutChartLine} from 'react-icons/ri';
import { MdLocalSee } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";

export const AdminSidebarData = [
  {
    title: 'Add Items',
    path: '/addItem',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Talk to Us',
    path: '/talktous',
    icon: <RiKakaoTalkFill />,
    cName: 'nav-text'
  },
  {
    title: 'Recepie Similarity',
    path: '/recipesimilarity',
    icon: <RiDonutChartLine />,
    cName: 'nav-text'
  },
  {
    title: 'Visulization',
    path: '/visulization',
    icon: <MdLocalSee />,
    cName: 'nav-text'
  },
  {
    title: 'Analysis',
    path: '/analysis',
    icon: <BiAnalyse />,
    cName: 'nav-text'
  }

];