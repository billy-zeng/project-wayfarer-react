import React from 'react';
import PostInteraction from '../../PostList/PostInteraction/PostInteraction';

const PostDetailMain = props => {
  return(
    <>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur voluptatem quia saepe voluptate nostrum provident iure mollitia sit repellendus, vel blanditiis, officia culpa unde est impedit nihil quibusdam temporibus in et tempora dolorum dicta. Voluptate numquam vitae inventore doloremque ipsam, a velit, nihil ut amet assumenda alias quidem facilis laboriosam nam. Architecto, similique voluptatibus eos iure nostrum magni atque tempora nulla! Doloremque eveniet vitae quo veritatis sunt eligendi asperiores nemo. Sed quia, accusantium ratione eligendi repellendus corporis et rerum, illum perspiciatis dolores ex pariatur veritatis vitae expedita aspernatur. Exercitationem, tenetur ipsam laboriosam dolor fugiat mollitia ad cupiditate culpa tempore quia nostrum autem porro recusandae atque officiis obcaecati? Reprehenderit, unde blanditiis corporis laboriosam nulla ullam suscipit laudantium amet illum officiis asperiores officia possimus. Eligendi consequatur tempore, maiores quod dolore recusandae sunt dolorum voluptates magnam aliquid sint eveniet nobis placeat, laborum accusantium architecto quis nulla numquam repudiandae ratione commodi repellendus quos. Voluptates.</p>
      <PostInteraction postData={props.postData} />
    </>
  );
};

export default PostDetailMain;
