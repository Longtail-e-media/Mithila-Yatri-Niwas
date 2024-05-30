<?php
/*
* Contact form
*/
$rescont = $innerbred = '';
$img='';
if (defined('CONTACT_PAGE')) {


    $siteRegulars = Config::find_by_id(1);

    $tellinked = '';
    $telno = explode("/", $siteRegulars->contact_info);
    $lastElement = array_shift($telno);
    $tellinked .= '<a href="tel:' . $lastElement . '" target="_blank">' . $lastElement . '</a>/';
    foreach ($telno as $tel) {
        
        $tellinked .= '<a href="tel:+977-' . $tel . '" target="_blank">' . $tel . '</a>';
        if(end($telno)!= $tel){
        $tellinked .= '/';
        }   
}
$imglink= $siteRegulars->contact_upload ;
if(!empty($imglink)){
    $img= IMAGE_PATH . 'preference/contact/' . $siteRegulars->contact_upload ;
}
else{
    $img='';
}
        // pr($siteRegulars);
    $rescont .= '
    <!--================ Breadcrumb ================-->
    <div class="mad-breadcrumb with-bg-img with-overlay" data-bg-image-src="'.$img.'">
        <div class="container wide">
            <h1 class="mad-page-title">Contact</h1>
            <nav class="mad-breadcrumb-path">
                <span><a href="home" class="mad-link">Home</a></span> /
                <span>Contact Us</span>
            </nav>
        </div>
    </div>
    <!--================ End of Breadcrumb ================-->

    <div class="mad-content no-pd">
        <div class="container">
            <div class="mad-section">
                <div class="row vr-size-2">
                    <div class="col-lg-5">
                        <div class="mad-title-wrap">
                            <div class="mad-pre-title">Contact Details</div>
                            <h2 class="mad-section-title">Get In Touch</h2>
                        </div>
                        <div class="mad-vr-list mad-text-medium content-element-3">
                            <ul>
                                <li>'. $siteRegulars->fiscal_address .'</li>
                                <li><b>Landline:'. $tellinked .'</li>
                                <li><b>Phone:</b> '. $siteRegulars->whatsapp .'</li>
                                <li>
                                    <b>Email:</b>
                                    <a href="mailto: '. $siteRegulars->email_address .'" > '. $siteRegulars->email_address .'</a>
                                </li>
                            </ul>
                        </div>

                        <div class="mad-social-icons">
                            <ul>
                            ' . $jVars['module:socilaLinkbtm'] . ' 
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-7">
                        <form class="mad-contact-form mad-form type-2 item-col-2" method="post" action="enquery_mail.php" id="form_contact">
                            <div class="mad-col">
                                <div class="mad-form-item">
                                    <label>Title *</label>
                                    <div class="mad-custom-select">
                                        <select data-default-text="Please select">
                                            <option>Mr.</option>
                                            <option>Mrs.</option>
                                            <option>Miss</option>
                                        </select>
                                    </div>
                                </div>

                                <div class="mad-form-item">
                                    <label>First name *</label>
                                    <input type="text" id="cf_name" name="cf_name" required="" placeholder="First Name" />
                                </div>

                                <div class="mad-form-item">
                                    <label>Last name *</label>
                                    <input type="text" id="cf_lname" name="cf_lname" required="" placeholder="Last Name"/>
                                </div>

                                <div class="mad-form-item">
                                    <label>Email *</label>
                                    <input type="email"  id="cf_email" name="cf_email" required="" placeholder="Email Address" />
                                </div>

                                <div class="mad-form-item">
                                    <label>Phone number</label>
                                    <input type="tel" id="cf_phone" name="cf_phone" placeholder="Phone Number" />
                                </div>
                            </div>

                            <div class="mad-col">
                                <div class="mad-form-item">
                                    <label>Address *</label>
                                    <input type="text" id="cf_name" name="cf_name" required="" placeholder="Address" />
                                </div>

                                <div class="mad-form-item full-height">
                                    <label>Message *</label>
                                    <textarea rows="5" id="message" name="message" required="" placeholder="Message"></textarea>
                                    
                                </div>

                                <div class="mad-form-item">
                                <div id="g-recaptcha-response" class="g-recaptcha" data-sitekey="6Lc2BUAnAAAAACVq_ob7ovqecd3zAFbF1294p5jq"></div>
                                    <input type="submit" class="btn btn-big" id="submit" value="SUBMIT">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="mad-section no-pd mad-section--stretched-content-no-px mad-colorizer--scheme-">
                <div class="mad-gmap">
                    <iframe src="'. $siteRegulars->location_map .'" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>


    ';
}

$jVars['module:contact-us'] = $rescont;
