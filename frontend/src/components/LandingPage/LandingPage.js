import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { MainContext } from '../../indexContextProvider';

import goal_distribute from '../../assets/goal-distribute.svg';
import goal_funding from '../../assets/goal-funding.svg';
import goal_more from '../../assets/goal-more.svg';
import goal_opening from '../../assets/goal-opening.svg';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';

import './LandingPage.css';

const About = () => {
  const { logined } = useContext(MainContext);

  console.log(logined);

  return (
    <div className='About'>
      <nav className='Link_to-login'>
        {!logined ? (
          <>
            <div className='Link_nav-dont-have-accoutn'>
              Don't have account yet? create a new one!
            </div>
            <div className='Link_nav-login'>
              <Link to='/auth/login'>Sign In</Link>
            </div>
          </>
        ) : (
          <>
            <div className='Link_nav-dont-have-accoutn'>
              Back to dashboard page.
            </div>
            <div className='Link_nav-login'>
              <Link to='/dashboard'>Dashboard</Link>
            </div>
          </>
        )}
      </nav>
      <section className='About__header'>
        <div className='About__header-text'>
          <h1 className='About__header-text-title'>
            About <span className='About__text-green'>Rancor</span>
          </h1>

          <p className='About__header-text-description'>
            Hi! We’re Rancor, a new filesharing platform founded by heavy files
            enjoyers with backgrounds in AI and scalable tech.
          </p>
          <br />
          <p className='About__header-text-description'>
            We’re just getting started, but we have a big vision to improve
            filesharing discovery for users and help hosts grow their audiences
            and get monetary support for their files.
          </p>
        </div>
      </section>
      <main className='About__main'>
        <section className='About__main-doing'>
          <h3 className='About__main-doing-title'>What we're doing</h3>
          <p className='About__main-doing-description'>
            There are over a million files today, made by passionate creators
            around the globe and covering almost every topic under the sun. Most
            of these
            <span className='About__text-green-background'>
              files don’t have the audience
            </span>{' '}
            they deserve, simply because users haven’t found them yet.
          </p>
          <p>
            <span className='About__text-green-background About__main-doing-description'>
              We want to change that.
            </span>
          </p>
          <p className='About__main-doing-description'>
            We believe there’s a better way to connect users to content than
            word-of-mouth, top charts, and keyword searches in various files
            apps.{' '}
            <span className='About__text-green-background'>
              Using billions of data points
            </span>{' '}
            across a million file
            <span className='About__text-green-background'>
              AI-based data augmentation
            </span>
            we surface indie, under-the-radar files recommendations relevant to
            you and your interests—including shows that are niche, new, small,
            and special.
          </p>
          <p className='About__main-doing-description'>
            We’re passionate about privacy, so we won’t sell our users’ personal
            data along the way.
          </p>
          <div className='About__main-video-container'>
            <iframe
              className='About__video-iframe'
              title='About__youtube_video'
              width='295'
              height='187'
              src='https://www.youtube.com/embed/_UWPaPer1MY'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
        </section>
        <section className='About__main-goals'>
          <h3 className='About__main-doing-title About__main-goals-title'>
            How To
          </h3>
          <div className='About__main-goals-container'>
            <div className='About__main-goals-item'>
              <img
                alt='our goal'
                src={goal_distribute}
                className='About__main-goals-image'
              />
              <p className='About__main-goals-text'>Create an account</p>
            </div>
            <div className='About__main-goals-item'>
              <img
                alt='our goal'
                src={goal_more}
                className='About__main-goals-image'
              />
              <p className='About__main-goals-text'>Sign in in system</p>
            </div>
            <div className='About__main-goals-item'>
              <img
                alt='our goal'
                src={goal_funding}
                className='About__main-goals-image'
              />
              <p className='About__main-goals-text'>
                Upload Your first file, create directory
              </p>
            </div>
            <div className='About__main-goals-item'>
              <img
                alt='our goal'
                src={goal_opening}
                className='About__main-goals-image'
              />
              <p className='About__main-goals-text'>
                Share file with your friends
              </p>
            </div>
          </div>
        </section>
        <section className='About__main-next'>
          <h3 className='About__main-doing-title'>What’s next</h3>
          <p className='About__main-doing-description'>
            We have a lot of new features in the works, so if you want to stay
            in the loop, create an account and be sure to check the box that
            says ‘I’d like to receive updates.’
          </p>
          <p className='About__main-doing-description'>
            In the meantime, we love hearing from our users—listeners and
            podcasters—so if you have ideas, feedback, or just want to say hi,
            please{' '}
            <a className='About__main-text-link' href='/feedback'>
              drop us a note.
            </a>
          </p>

          <p className='About__main-next-team'> –Team Rancor</p>

          <div className='About__main-follow'>
            <p className='About__main-follow-text'>
              P.S. Follow us on{' '}
              <a
                className='About__main-follow-text-icon'
                href='https://twitter.com/2rueSid'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Twitter />
              </a>{' '}
            </p>
            <p className='About__main-follow-text'>
              and{' '}
              <a
                className='About__main-follow-text-icon'
                href='https://instagram.com/dima_kachurovskyy'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Instagram />
              </a>
              for more updates.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
