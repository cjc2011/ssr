<template>
  <section class="personal">
    <header class="section-hd">
      <span class="section-title-l"></span>
      <h2 class="section-title">个人作品</h2>
      <span class="section-title-r"></span>
    </header>
    <div class="section-bd">
      <div class="item">
        <header class="item-hd">
          <a class="btn item-more" href="http://chenjiacheng.cn" target="_blank">Link</a>
          <h3 class="item-name">
            <i class="iconfont icon-dot"></i> 个人主页 · 技术博客
          </h3>
        </header>
        <div class="item-bd">
          <p class="section-content">
            自己喜欢琢磨一些有趣有意思的东西，并以
            <em>chenjiacheng.cn</em>作为个人域名,使用<em>VPS</em>服务器搭建个人博客,代码托管在个人服务器仓库,并且使用<em>git hooks</em>作为自动化部署脚本
          </p>
        </div>
      </div>
      <div class="item">
        <header class="item-hd">
          <a class="btn item-more" href="https://github.com/cjc2011/reactNative" target="_blank">Link</a>
          <h3 class="item-name">
            <i class="iconfont icon-dot"></i> RN项目
          </h3>
        </header>
        <div class="item-bd">
          <p class="section-content">
            公司曾经尝试过在APP中接入<em>React-Native</em>, 由于当时React团队开源协议问题不得不放弃，不过在此期间也提起了学习RN框架的兴趣。此为个人学习的项目，其中涉及到<em>React-Navigation</em> <em>Redux</em> <em>CodePush</em> <em>离线缓存</em>等技术应用
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'example'
};
</script>
