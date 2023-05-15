import React from 'react';
import s from './barPlayer.module.css';
import sprite from '../../img/icon/sprite.svg'
import SkeletonLoading from '../skeleton/skeletonLoading';
// import AudioPlayer from '../burgerMenu/audioPlayer';
import  { useState, useEffect } from 'react';


function BarPlayer() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [audio] = useState(new Audio("/Bobby_Marleni_-_Dropin.mp3")); // путь к скаченному треку
    const [position, setPosition] = useState(0);

    const togglePlay = () => {
        if (!isPlaying) {
          audio.play();
        } else {
          audio.pause();
        }
        setIsPlaying(!isPlaying);
      };
        
      const updateTime = () => {
        const newPosition = (audio.currentTime / audio.duration) * 100;
        setPosition(newPosition);
      };
    
      useEffect(() => {
        const interval = setInterval(updateTime, 500);
        return () => clearInterval(interval);
      }, [isPlaying]);

      

  return (
    

    <div className={s.bar}>
         <div>
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => {
          const newPosition = e.target.value;
          const newTime = (newPosition / 100) * audio.duration;
          audio.currentTime = newTime;
          setPosition(newPosition);
        }}
      />
        
        </div>
                <div className={s.bar__content}> 
                    <div className={s.bar__player_progress}></div>
                    <div className={s.bar__player_block}>
                        <div className={s.bar__player}>
                            <div className={s.player__controls}>
                                <div className={s.player__btn_prev}>
                                    <svg className={s.player__btn_prev_svg} alt="prev" >
                                        <use xlinkHref={`${sprite}#icon-prev`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_play}>
                                    <svg className={s.player__btn_play_svg} alt="play" onClick={togglePlay} >
                                        <use xlinkHref={`${sprite}#icon-play`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_next}>
                                    <svg className={s.player__btn_next_svg} alt="next">
                                        <use xlinkHref={`${sprite}#icon-next`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_repeat}>
                                    <svg className={s.player__btn_repeat_svg} alt="repeat">
                                        <use xlinkHref={`${sprite}#icon-repeat`}></use>
                                    </svg>
                                </div>
                                <div className={s.player__btn_shuffle}>
                                    <svg className={s.player__btn_shuffle_svg} alt="shuffle">
                                        <use xlinkHref={`${sprite}#icon-shuffle`}></use>
                                    </svg>
                                </div>
                            </div>
                            
                        <div className={s.player__track_play}>
                                <div className={s.track_play__contain}>
                                    <div className={s.track_play__image}>
                                    <SkeletonLoading width={51} height={51}>
                                        <svg className={s.track_play__svg} alt="music">
                                            <use xlinkHref={`${sprite}#icon-note`}></use>
                                        </svg>
                                    </SkeletonLoading>
                                    </div>
                                    <div className={s.track_play__author}>
                                    <SkeletonLoading width={50} height={15}>
                                        <a className={s.track_play__author_link} href="http://">Ты та...</a>
                                    </SkeletonLoading>
                                    </div>
                                    <div className={s.track_play__album}>
                                    <SkeletonLoading width={50} height={15}>
                                        <a className={s.track_play__album_link} href="http://">Баста</a>
                                    </SkeletonLoading>
                                    </div>
                                </div>

                            <div className={s.track_play__like_dis}>
                                    <div className={s.track_play__like} >
                                        <svg className={s.track_play__like_svg} alt="like">
                                            <use xlinkHref={`${sprite}#icon-like`}></use>
                                        </svg>
                                    </div>
                                    <div className={s.track_play__dislike} >
                                        <svg className={s.track_play__dislike_svg} alt="dislike">
                                            <use xlinkHref={`${sprite}#icon-dislike`}></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.bar__volume_block} >
                           <div className={s.volume__content}>
                                <div className={s.volume__image}>
                                    <svg className={s.volume__svg} alt="volume">
                                        <use xlinkHref={`${sprite}#icon-volume`}></use>
                                    </svg>
                                </div>
                                <div className={s.volume__progress}>
                                    <input className={s.volume__progress_line} type="range" name="range"/>
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default  BarPlayer;
