import Vue from 'vue'
import Router from 'vue-router'
import Xinge from '@/components/Xinge/Xinge'
import SouSuo from '@/components/Paihang/SouSuo'
import Geshou from '@/components/Geshou/Geshou'
import Gedan from '@/components/Gedan/Gedan'
import Artist from '@/components/Artist/Artist'
import Chart from '@/components/Chart/Chart'
import Mymusic from '@/components/Mymusic/Mymusic'
import Playlistsinger from '@/components/Playlist/Playlist_singer'
import Playlist from '@/components/Playlist/Playlist'
import Playing from '@/components/Playing/Playing'
import Songs from '@/components/Songs/Songs'
import Personal from '@/components/Personal/Personal'
import mm from '@/components/mm/mm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Xinge',
      component: Xinge
    },
    {
      path: '/SouSuo',
      name: 'SouSuo',
      component: SouSuo
    },
    {
      path: '/Geshou',
      name: 'Geshou',
      component: Geshou
    },
    {
      path: '/Artist',
      name: 'Artist',
      component: Artist
    },
    {
      path: '/Chart',
      name: 'Chart',
      component:Chart
    },
    {
      path: '/Mymusic',
      name: 'Mymusic',
      component: Mymusic
    },
    {
      path: '/Playlist',
      name: 'Playlist',
      component: Playlist,
      children:[
        {
          path: '/Playlist/:id',
          component:Playing
        }

      ]
    },
    {
      path: '/Playlistsinger',
      name: 'Playlistsinger',
      component: Playlistsinger
    },
    {
      path: '/Songs',
      name: 'Songs',
      component: Songs,
      // children: [
      //   {
      //     path: '/Songs/:id',
      //     component:Playing
      //   }
      //
      // ]
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/Gedan',
      name: 'Gedan',
      component: Gedan
    }

  ]
})
