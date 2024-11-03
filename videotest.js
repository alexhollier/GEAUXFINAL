const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})


/*<script>
document.getElementById('changeOverlayColor').addEventListener('click', function() {
        document.documentElement.style.setProperty('--overlay-color', '#b4190b');
    });
</script>*/

