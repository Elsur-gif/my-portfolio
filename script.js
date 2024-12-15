// 获取导航栏元素
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// 点击汉堡菜单时切换导航显示状态
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});
// 动态加载技能条动画
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const progress = bar.style.getPropertyValue('--progress');
        bar.style.width = progress;
    });
});
