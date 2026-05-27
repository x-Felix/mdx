// Listen inputs and update associated image previews when possible
function input_image_preview(selectors) {
    selectors.forEach(function(selector) {
        jQuery(selector).on('change', function() {
            var val = jQuery(this).val();
            var imgId = selector.replace('#mdx_', '#img').replace(/_url$/, '').replace(/_img$/, '1').replace(/_side_img$/, '2').replace(/_side_head$/, '3').replace(/_logo$/, '4').replace(/_post_def_img$/, '5').replace(/_post_money$/, '1');
            if (val.substring(0, 4) === 'http') {
                jQuery(imgId).attr('src', val);
            } else {
                jQuery(imgId).attr('src', '');
            }
        });
    });
}
