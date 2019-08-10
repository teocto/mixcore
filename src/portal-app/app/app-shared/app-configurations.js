app.constant('AppSettings', {
    serviceBase: '',
    apiVersion: 'v1',
});
app.constant('ngAppSettings', {
    serviceBase: '',
    clientId: 'ngAuthApp',
    facebookAppId: '464285300363325',
    request: {
        pageSize: '20',
        pageIndex: 0,
        status: '2',
        orderBy: 'CreatedDateTime',
        direction: '1',
        fromDate: null,
        toDate: null,
        keyword: '',
        key: '',
        query: ''
    },
    privacies: [
        'VND',
        'USD'
    ],
    pageSizes: [
        '',
        '5',
        '10',
        '15',
        '20'
    ],
    directions: [
        {
            value: '0',
            title: 'Asc'
        },
        {
            value: '1',
            title: 'Desc'
        }
    ],
    orders: [
        {
            value: 'CreatedDateTime',
            title: 'Created Date'
        }
        ,
        {
            value: 'Priority',
            title: 'Priority'
        },

        {
            value: 'Title',
            title: 'Title'
        }
    ],
    contentStatuses: [
        'Deleted',
        'Preview',
        'Published',
        'Draft',
        'Schedule'
    ],
    dataTypes: [
        { title: 'Custom', value: 0 },
        { title: 'DateTime', value: 1 },
        { title: 'Date', value: 2 },
        { title: 'Time', value: 3 },
        { title: 'Duration', value: 4 },
        { title: 'PhoneNumber', value: 5 },
        { title: 'Currency', value: 6 },
        { title: 'Text', value: 7 },
        { title: 'Html', value: 8 },
        { title: 'MultilineText', value: 9 },
        { title: 'EmailAddress', value: 10 },
        { title: 'Password', value: 11 },
        { title: 'Url', value: 12 },
        { title: 'ImageUrl', value: 13 },
        { title: 'CreditCard', value: 14 },
        { title: 'PostalCode', value: 15 },
        { title: 'Upload', value: 16 },

    ]
    , icons: [

        'fas fa-500px',
        'fas fa-accessible-icon',
        'fas fa-accusoft',
        'fas fa-acquisitions-incorporated',
        'fas fa-ad',
        'fas fa-address-book',
        'fas fa-address-card',
        'fas fa-adjust',
        'fas fa-adn',
        'fas fa-adversal',
        'fas fa-affiliatetheme',
        'fas fa-air-freshener',
        'fas fa-algolia',
        'fas fa-align-center',
        'fas fa-align-justify',
        'fas fa-align-left',
        'fas fa-align-right',
        'fas fa-alipay',
        'fas fa-allergies',
        'fas fa-amazon',
        'fas fa-amazon-pay',
        'fas fa-ambulance',
        'fas fa-american-sign-language-interpreting',
        'fas fa-amilia',
        'fas fa-anchor',
        'fas fa-android',
        'fas fa-angellist',
        'fas fa-angle-double-down',
        'fas fa-angle-double-left',
        'fas fa-angle-double-right',
        'fas fa-angle-double-up',
        'fas fa-angle-down',
        'fas fa-angle-left',
        'fas fa-angle-right',
        'fas fa-angle-up',
        'fas fa-angry',
        'fas fa-angrycreative',
        'fas fa-angular',
        'fas fa-ankh',
        'fas fa-app-store',
        'fas fa-app-store-ios',
        'fas fa-apper',
        'fas fa-apple',
        'fas fa-apple-alt',
        'fas fa-apple-pay',
        'fas fa-archive',
        'fas fa-archway',
        'fas fa-arrow-alt-circle-down',
        'fas fa-arrow-alt-circle-left',
        'fas fa-arrow-alt-circle-right',
        'fas fa-arrow-alt-circle-up',
        'fas fa-arrow-circle-down',
        'fas fa-arrow-circle-left',
        'fas fa-arrow-circle-right',
        'fas fa-arrow-circle-up',
        'fas fa-arrow-down',
        'fas fa-arrow-left',
        'fas fa-arrow-right',
        'fas fa-arrow-up',
        'fas fa-arrows-alt',
        'fas fa-arrows-alt-h',
        'fas fa-arrows-alt-v',
        'fas fa-assistive-listening-systems',
        'fas fa-asterisk',
        'fas fa-asymmetrik',
        'fas fa-at',
        'fas fa-atlas',
        'fas fa-atom',
        'fas fa-audible',
        'fas fa-audio-description',
        'fas fa-autoprefixer',
        'fas fa-avianex',
        'fas fa-aviato',
        'fas fa-award',
        'fas fa-aws',
        'fas fa-backspace',
        'fas fa-backward',
        'fas fa-balance-scale',
        'fas fa-ban',
        'fas fa-band-aid',
        'fas fa-bandcamp',
        'fas fa-barcode',
        'fas fa-bars',
        'fas fa-baseball-ball',
        'fas fa-basketball-ball',
        'fas fa-bath',
        'fas fa-battery-empty',
        'fas fa-battery-full',
        'fas fa-battery-half',
        'fas fa-battery-quarter',
        'fas fa-battery-three-quarters',
        'fas fa-bed',
        'fas fa-beer',
        'fas fa-behance',
        'fas fa-behance-square',
        'fas fa-bell',
        'fas fa-bell-slash',
        'fas fa-bezier-curve',
        'fas fa-bible',
        'fas fa-bicycle',
        'fas fa-bimobject',
        'fas fa-binoculars',
        'fas fa-birthday-cake',
        'fas fa-bitbucket',
        'fas fa-bitcoin',
        'fas fa-bity',
        'fas fa-black-tie',
        'fas fa-blackberry',
        'fas fa-blender',
        'fas fa-blender-phone',
        'fas fa-blind',
        'fas fa-blogger',
        'fas fa-blogger-b',
        'fas fa-bluetooth',
        'fas fa-bluetooth-b',
        'fas fa-bold',
        'fas fa-bolt',
        'fas fa-bomb',
        'fas fa-bone',
        'fas fa-bong',
        'fas fa-book',
        'fas fa-book-dead',
        'fas fa-book-open',
        'fas fa-book-reader',
        'fas fa-bookmark',
        'fas fa-bowling-ball',
        'fas fa-box',
        'fas fa-box-open',
        'fas fa-boxes',
        'fas fa-braille',
        'fas fa-brain',
        'fas fa-briefcase',
        'fas fa-briefcase-medical',
        'fas fa-broadcast-tower',
        'fas fa-broom',
        'fas fa-brush',
        'fas fa-btc',
        'fas fa-bug',
        'fas fa-building',
        'fas fa-bullhorn',
        'fas fa-bullseye',
        'fas fa-burn',
        'fas fa-buromobelexperte',
        'fas fa-bus',
        'fas fa-bus-alt',
        'fas fa-business-time',
        'fas fa-buysellads',
        'fas fa-calculator',
        'fas fa-calendar',
        'fas fa-calendar-alt',
        'fas fa-calendar-check',
        'fas fa-calendar-minus',
        'fas fa-calendar-plus',
        'fas fa-calendar-times',
        'fas fa-camera',
        'fas fa-camera-retro',
        'fas fa-campground',
        'fas fa-cannabis',
        'fas fa-capsules',
        'fas fa-car',
        'fas fa-car-alt',
        'fas fa-car-battery',
        'fas fa-car-crash',
        'fas fa-car-side',
        'fas fa-caret-down',
        'fas fa-caret-left',
        'fas fa-caret-right',
        'fas fa-caret-square-down',
        'fas fa-caret-square-left',
        'fas fa-caret-square-right',
        'fas fa-caret-square-up',
        'fas fa-caret-up',
        'fas fa-cart-arrow-down',
        'fas fa-cart-plus',
        'fas fa-cat',
        'fas fa-cc-amazon-pay',
        'fas fa-cc-amex',
        'fas fa-cc-apple-pay',
        'fas fa-cc-diners-club',
        'fas fa-cc-discover',
        'fas fa-cc-jcb',
        'fas fa-cc-mastercard',
        'fas fa-cc-paypal',
        'fas fa-cc-stripe',
        'fas fa-cc-visa',
        'fas fa-centercode',
        'fas fa-certificate',
        'fas fa-chair',
        'fas fa-chalkboard',
        'fas fa-chalkboard-teacher',
        'fas fa-charging-station',
        'fas fa-chart-area',
        'fas fa-chart-bar',
        'fas fa-chart-line',
        'fas fa-chart-pie',
        'fas fa-check',
        'fas fa-check-circle',
        'fas fa-check-double',
        'fas fa-check-square',
        'fas fa-chess',
        'fas fa-chess-bishop',
        'fas fa-chess-board',
        'fas fa-chess-king',
        'fas fa-chess-knight',
        'fas fa-chess-pawn',
        'fas fa-chess-queen',
        'fas fa-chess-rook',
        'fas fa-chevron-circle-down',
        'fas fa-chevron-circle-left',
        'fas fa-chevron-circle-right',
        'fas fa-chevron-circle-up',
        'fas fa-chevron-down',
        'fas fa-chevron-left',
        'fas fa-chevron-right',
        'fas fa-chevron-up',
        'fas fa-child',
        'fas fa-chrome',
        'fas fa-church',
        'fas fa-circle',
        'fas fa-circle-notch',
        'fas fa-city',
        'fas fa-clipboard',
        'fas fa-clipboard-check',
        'fas fa-clipboard-list',
        'fas fa-clock',
        'fas fa-clone',
        'fas fa-closed-captioning',
        'fas fa-cloud',
        'fas fa-cloud-download-alt',
        'fas fa-cloud-meatball',
        'fas fa-cloud-moon',
        'fas fa-cloud-moon-rain',
        'fas fa-cloud-rain',
        'fas fa-cloud-showers-heavy',
        'fas fa-cloud-sun',
        'fas fa-cloud-sun-rain',
        'fas fa-cloud-upload-alt',
        'fas fa-cloudscale',
        'fas fa-cloudsmith',
        'fas fa-cloudversify',
        'fas fa-cocktail',
        'fas fa-code',
        'fas fa-code-branch',
        'fas fa-codepen',
        'fas fa-codiepie',
        'fas fa-coffee',
        'fas fa-cog',
        'fas fa-cogs',
        'fas fa-coins',
        'fas fa-columns',
        'fas fa-comment',
        'fas fa-comment-alt',
        'fas fa-comment-dollar',
        'fas fa-comment-dots',
        'fas fa-comment-slash',
        'fas fa-comments',
        'fas fa-comments-dollar',
        'fas fa-compact-disc',
        'fas fa-compass',
        'fas fa-compress',
        'fas fa-concierge-bell',
        'fas fa-connectdevelop',
        'fas fa-contao',
        'fas fa-cookie',
        'fas fa-cookie-bite',
        'fas fa-copy',
        'fas fa-copyright',
        'fas fa-couch',
        'fas fa-cpanel',
        'fas fa-creative-commons',
        'fas fa-creative-commons-by',
        'fas fa-creative-commons-nc',
        'fas fa-creative-commons-nc-eu',
        'fas fa-creative-commons-nc-jp',
        'fas fa-creative-commons-nd',
        'fas fa-creative-commons-pd',
        'fas fa-creative-commons-pd-alt',
        'fas fa-creative-commons-remix',
        'fas fa-creative-commons-sa',
        'fas fa-creative-commons-sampling',
        'fas fa-creative-commons-sampling-plus',
        'fas fa-creative-commons-share',
        'fas fa-creative-commons-zero',
        'fas fa-credit-card',
        'fas fa-critical-role',
        'fas fa-crop',
        'fas fa-crop-alt',
        'fas fa-cross',
        'fas fa-crosshairs',
        'fas fa-crow',
        'fas fa-crown',
        'fas fa-css3',
        'fas fa-css3-alt',
        'fas fa-cube',
        'fas fa-cubes',
        'fas fa-cut',
        'fas fa-cuttlefish',
        'fas fa-d-and-d',
        'fas fa-d-and-d-beyond',
        'fas fa-dashcube',
        'fas fa-database',
        'fas fa-deaf',
        'fas fa-delicious',
        'fas fa-democrat',
        'fas fa-deploydog',
        'fas fa-deskpro',
        'fas fa-desktop',
        'fas fa-dev',
        'fas fa-deviantart',
        'fas fa-dharmachakra',
        'fas fa-diagnoses',
        'fas fa-dice',
        'fas fa-dice-d20',
        'fas fa-dice-d6',
        'fas fa-dice-five',
        'fas fa-dice-four',
        'fas fa-dice-one',
        'fas fa-dice-six',
        'fas fa-dice-three',
        'fas fa-dice-two',
        'fas fa-digg',
        'fas fa-digital-ocean',
        'fas fa-digital-tachograph',
        'fas fa-directions',
        'fas fa-discord',
        'fas fa-discourse',
        'fas fa-divide',
        'fas fa-dizzy',
        'fas fa-dna',
        'fas fa-dochub',
        'fas fa-docker',
        'fas fa-dog',
        'fas fa-dollar-sign',
        'fas fa-dolly',
        'fas fa-dolly-flatbed',
        'fas fa-donate',
        'fas fa-door-closed',
        'fas fa-door-open',
        'fas fa-dot-circle',
        'fas fa-dove',
        'fas fa-download',
        'fas fa-draft2digital',
        'fas fa-drafting-compass',
        'fas fa-dragon',
        'fas fa-draw-polygon',
        'fas fa-dribbble',
        'fas fa-dribbble-square',
        'fas fa-dropbox',
        'fas fa-drum',
        'fas fa-drum-steelpan',
        'fas fa-drumstick-bite',
        'fas fa-drupal',
        'fas fa-dumbbell',
        'fas fa-dungeon',
        'fas fa-dyalog',
        'fas fa-earlybirds',
        'fas fa-ebay',
        'fas fa-edge',
        'fas fa-edit',
        'fas fa-eject',
        'fas fa-elementor',
        'fas fa-ellipsis-h',
        'fas fa-ellipsis-v',
        'fas fa-ello',
        'fas fa-ember',
        'fas fa-empire',
        'fas fa-envelope',
        'fas fa-envelope-open',
        'fas fa-envelope-open-text',
        'fas fa-envelope-square',
        'fas fa-envira',
        'fas fa-equals',
        'fas fa-eraser',
        'fas fa-erlang',
        'fas fa-ethereum',
        'fas fa-etsy',
        'fas fa-euro-sign',
        'fas fa-exchange-alt',
        'fas fa-exclamation',
        'fas fa-exclamation-circle',
        'fas fa-exclamation-triangle',
        'fas fa-expand',
        'fas fa-expand-arrows-alt',
        'fas fa-expeditedssl',
        'fas fa-external-link-alt',
        'fas fa-external-link-square-alt',
        'fas fa-eye',
        'fas fa-eye-dropper',
        'fas fa-eye-slash',
        'fas fa-facebook',
        'fas fa-facebook-f',
        'fas fa-facebook-messenger',
        'fas fa-facebook-square',
        'fas fa-fantasy-flight-games',
        'fas fa-fast-backward',
        'fas fa-fast-forward',
        'fas fa-fax',
        'fas fa-feather',
        'fas fa-feather-alt',
        'fas fa-female',
        'fas fa-fighter-jet',
        'fas fa-file',
        'fas fa-file-alt',
        'fas fa-file-archive',
        'fas fa-file-audio',
        'fas fa-file-code',
        'fas fa-file-contract',
        'fas fa-file-csv',
        'fas fa-file-download',
        'fas fa-file-excel',
        'fas fa-file-export',
        'fas fa-file-image',
        'fas fa-file-import',
        'fas fa-file-invoice',
        'fas fa-file-invoice-dollar',
        'fas fa-file-medical',
        'fas fa-file-medical-alt',
        'fas fa-file-pdf',
        'fas fa-file-powerpoint',
        'fas fa-file-prescription',
        'fas fa-file-signature',
        'fas fa-file-upload',
        'fas fa-file-video',
        'fas fa-file-word',
        'fas fa-fill',
        'fas fa-fill-drip',
        'fas fa-film',
        'fas fa-filter',
        'fas fa-fingerprint',
        'fas fa-fire',
        'fas fa-fire-extinguisher',
        'fas fa-firefox',
        'fas fa-first-aid',
        'fas fa-first-order',
        'fas fa-first-order-alt',
        'fas fa-firstdraft',
        'fas fa-fish',
        'fas fa-fist-raised',
        'fas fa-flag',
        'fas fa-flag-checkered',
        'fas fa-flag-usa',
        'fas fa-flask',
        'fas fa-flickr',
        'fas fa-flipboard',
        'fas fa-flushed',
        'fas fa-fly',
        'fas fa-folder',
        'fas fa-folder-minus',
        'fas fa-folder-open',
        'fas fa-folder-plus',
        'fas fa-font',
        'fas fa-font-awesome',
        'fas fa-font-awesome-alt',
        'fas fa-font-awesome-flag',
        'fas fa-font-awesome-logo-full',
        'fas fa-fonticons',
        'fas fa-fonticons-fi',
        'fas fa-football-ball',
        'fas fa-fort-awesome',
        'fas fa-fort-awesome-alt',
        'fas fa-forumbee',
        'fas fa-forward',
        'fas fa-foursquare',
        'fas fa-free-code-camp',
        'fas fa-freebsd',
        'fas fa-frog',
        'fas fa-frown',
        'fas fa-frown-open',
        'fas fa-fulcrum',
        'fas fa-funnel-dollar',
        'fas fa-futbol',
        'fas fa-galactic-republic',
        'fas fa-galactic-senate',
        'fas fa-gamepad',
        'fas fa-gas-pump',
        'fas fa-gavel',
        'fas fa-gem',
        'fas fa-genderless',
        'fas fa-get-pocket',
        'fas fa-gg',
        'fas fa-gg-circle',
        'fas fa-ghost',
        'fas fa-gift',
        'fas fa-git',
        'fas fa-git-square',
        'fas fa-github',
        'fas fa-github-alt',
        'fas fa-github-square',
        'fas fa-gitkraken',
        'fas fa-gitlab',
        'fas fa-gitter',
        'fas fa-glass-martini',
        'fas fa-glass-martini-alt',
        'fas fa-glasses',
        'fas fa-glide',
        'fas fa-glide-g',
        'fas fa-globe',
        'fas fa-globe-africa',
        'fas fa-globe-americas',
        'fas fa-globe-asia',
        'fas fa-gofore',
        'fas fa-golf-ball',
        'fas fa-goodreads',
        'fas fa-goodreads-g',
        'fas fa-google',
        'fas fa-google-drive',
        'fas fa-google-play',
        'fas fa-google-plus',
        'fas fa-google-plus-g',
        'fas fa-google-plus-square',
        'fas fa-google-wallet',
        'fas fa-gopuram',
        'fas fa-graduation-cap',
        'fas fa-gratipay',
        'fas fa-grav',
        'fas fa-greater-than',
        'fas fa-greater-than-equal',
        'fas fa-grimace',
        'fas fa-grin',
        'fas fa-grin-alt',
        'fas fa-grin-beam',
        'fas fa-grin-beam-sweat',
        'fas fa-grin-hearts',
        'fas fa-grin-squint',
        'fas fa-grin-squint-tears',
        'fas fa-grin-stars',
        'fas fa-grin-tears',
        'fas fa-grin-tongue',
        'fas fa-grin-tongue-squint',
        'fas fa-grin-tongue-wink',
        'fas fa-grin-wink',
        'fas fa-grip-horizontal',
        'fas fa-grip-vertical',
        'fas fa-gripfire',
        'fas fa-grunt',
        'fas fa-gulp',
        'fas fa-h-square',
        'fas fa-hacker-news',
        'fas fa-hacker-news-square',
        'fas fa-hackerrank',
        'fas fa-hammer',
        'fas fa-hamsa',
        'fas fa-hand-holding',
        'fas fa-hand-holding-heart',
        'fas fa-hand-holding-usd',
        'fas fa-hand-lizard',
        'fas fa-hand-paper',
        'fas fa-hand-peace',
        'fas fa-hand-point-down',
        'fas fa-hand-point-left',
        'fas fa-hand-point-right',
        'fas fa-hand-point-up',
        'fas fa-hand-pointer',
        'fas fa-hand-rock',
        'fas fa-hand-scissors',
        'fas fa-hand-spock',
        'fas fa-hands',
        'fas fa-hands-helping',
        'fas fa-handshake',
        'fas fa-hanukiah',
        'fas fa-hashtag',
        'fas fa-hat-wizard',
        'fas fa-haykal',
        'fas fa-hdd',
        'fas fa-heading',
        'fas fa-headphones',
        'fas fa-headphones-alt',
        'fas fa-headset',
        'fas fa-heart',
        'fas fa-heartbeat',
        'fas fa-helicopter',
        'fas fa-highlighter',
        'fas fa-hiking',
        'fas fa-hippo',
        'fas fa-hips',
        'fas fa-hire-a-helper',
        'fas fa-history',
        'fas fa-hockey-puck',
        'fas fa-home',
        'fas fa-hooli',
        'fas fa-hornbill',
        'fas fa-horse',
        'fas fa-hospital',
        'fas fa-hospital-alt',
        'fas fa-hospital-symbol',
        'fas fa-hot-tub',
        'fas fa-hotel',
        'fas fa-hotjar',
        'fas fa-hourglass',
        'fas fa-hourglass-end',
        'fas fa-hourglass-half',
        'fas fa-hourglass-start',
        'fas fa-house-damage',
        'fas fa-houzz',
        'fas fa-hryvnia',
        'fas fa-html5',
        'fas fa-hubspot',
        'fas fa-i-cursor',
        'fas fa-id-badge',
        'fas fa-id-card',
        'fas fa-id-card-alt',
        'fas fa-image',
        'fas fa-images',
        'fas fa-imdb',
        'fas fa-inbox',
        'fas fa-indent',
        'fas fa-industry',
        'fas fa-infinity',
        'fas fa-info',
        'fas fa-info-circle',
        'fas fa-instagram',
        'fas fa-internet-explorer',
        'fas fa-ioxhost',
        'fas fa-italic',
        'fas fa-itunes',
        'fas fa-itunes-note',
        'fas fa-java',
        'fas fa-jedi',
        'fas fa-jedi-order',
        'fas fa-jenkins',
        'fas fa-joget',
        'fas fa-joint',
        'fas fa-joomla',
        'fas fa-journal-whills',
        'fas fa-js',
        'fas fa-js-square',
        'fas fa-jsfiddle',
        'fas fa-kaaba',
        'fas fa-kaggle',
        'fas fa-key',
        'fas fa-keybase',
        'fas fa-keyboard',
        'fas fa-keycdn',
        'fas fa-khanda',
        'fas fa-kickstarter',
        'fas fa-kickstarter-k',
        'fas fa-kiss',
        'fas fa-kiss-beam',
        'fas fa-kiss-wink-heart',
        'fas fa-kiwi-bird',
        'fas fa-korvue',
        'fas fa-landmark',
        'fas fa-language',
        'fas fa-laptop',
        'fas fa-laptop-code',
        'fas fa-laravel',
        'fas fa-lastfm',
        'fas fa-lastfm-square',
        'fas fa-laugh',
        'fas fa-laugh-beam',
        'fas fa-laugh-squint',
        'fas fa-laugh-wink',
        'fas fa-layer-group',
        'fas fa-leaf',
        'fas fa-leanpub',
        'fas fa-lemon',
        'fas fa-less',
        'fas fa-less-than',
        'fas fa-less-than-equal',
        'fas fa-level-down-alt',
        'fas fa-level-up-alt',
        'fas fa-life-ring',
        'fas fa-lightbulb',
        'fas fa-line',
        'fas fa-link',
        'fas fa-linkedin',
        'fas fa-linkedin-in',
        'fas fa-linode',
        'fas fa-linux',
        'fas fa-lira-sign',
        'fas fa-list',
        'fas fa-list-alt',
        'fas fa-list-ol',
        'fas fa-list-ul',
        'fas fa-location-arrow',
        'fas fa-lock',
        'fas fa-lock-open',
        'fas fa-long-arrow-alt-down',
        'fas fa-long-arrow-alt-left',
        'fas fa-long-arrow-alt-right',
        'fas fa-long-arrow-alt-up',
        'fas fa-low-vision',
        'fas fa-luggage-cart',
        'fas fa-lyft',
        'fas fa-magento',
        'fas fa-magic',
        'fas fa-magnet',
        'fas fa-mail-bulk',
        'fas fa-mailchimp',
        'fas fa-male',
        'fas fa-mandalorian',
        'fas fa-map',
        'fas fa-map-marked',
        'fas fa-map-marked-alt',
        'fas fa-map-marker',
        'fas fa-map-marker-alt',
        'fas fa-map-pin',
        'fas fa-map-signs',
        'fas fa-markdown',
        'fas fa-marker',
        'fas fa-mars',
        'fas fa-mars-double',
        'fas fa-mars-stroke',
        'fas fa-mars-stroke-h',
        'fas fa-mars-stroke-v',
        'fas fa-mask',
        'fas fa-mastodon',
        'fas fa-maxcdn',
        'fas fa-medal',
        'fas fa-medapps',
        'fas fa-medium',
        'fas fa-medium-m',
        'fas fa-medkit',
        'fas fa-medrt',
        'fas fa-meetup',
        'fas fa-megaport',
        'fas fa-meh',
        'fas fa-meh-blank',
        'fas fa-meh-rolling-eyes',
        'fas fa-memory',
        'fas fa-menorah',
        'fas fa-mercury',
        'fas fa-meteor',
        'fas fa-microchip',
        'fas fa-microphone',
        'fas fa-microphone-alt',
        'fas fa-microphone-alt-slash',
        'fas fa-microphone-slash',
        'fas fa-microscope',
        'fas fa-microsoft',
        'fas fa-minus',
        'fas fa-minus-circle',
        'fas fa-minus-square',
        'fas fa-mix',
        'fas fa-mixcloud',
        'fas fa-mizuni',
        'fas fa-mobile',
        'fas fa-mobile-alt',
        'fas fa-modx',
        'fas fa-monero',
        'fas fa-money-bill',
        'fas fa-money-bill-alt',
        'fas fa-money-bill-wave',
        'fas fa-money-bill-wave-alt',
        'fas fa-money-check',
        'fas fa-money-check-alt',
        'fas fa-monument',
        'fas fa-moon',
        'fas fa-mortar-pestle',
        'fas fa-mosque',
        'fas fa-motorcycle',
        'fas fa-mountain',
        'fas fa-mouse-pointer',
        'fas fa-music',
        'fas fa-napster',
        'fas fa-neos',
        'fas fa-network-wired',
        'fas fa-neuter',
        'fas fa-newspaper',
        'fas fa-nimblr',
        'fas fa-nintendo-switch',
        'fas fa-node',
        'fas fa-node-js',
        'fas fa-not-equal',
        'fas fa-notes-medical',
        'fas fa-npm',
        'fas fa-ns8',
        'fas fa-nutritionix',
        'fas fa-object-group',
        'fas fa-object-ungroup',
        'fas fa-odnoklassniki',
        'fas fa-odnoklassniki-square',
        'fas fa-oil-can',
        'fas fa-old-republic',
        'fas fa-om',
        'fas fa-opencart',
        'fas fa-openid',
        'fas fa-opera',
        'fas fa-optin-monster',
        'fas fa-osi',
        'fas fa-otter',
        'fas fa-outdent',
        'fas fa-page4',
        'fas fa-pagelines',
        'fas fa-paint-brush',
        'fas fa-paint-roller',
        'fas fa-palette',
        'fas fa-palfed',
        'fas fa-pallet',
        'fas fa-paper-plane',
        'fas fa-paperclip',
        'fas fa-parachute-box',
        'fas fa-paragraph',
        'fas fa-parking',
        'fas fa-passport',
        'fas fa-pastafarianism',
        'fas fa-paste',
        'fas fa-patreon',
        'fas fa-pause',
        'fas fa-pause-circle',
        'fas fa-paw',
        'fas fa-paypal',
        'fas fa-peace',
        'fas fa-pen',
        'fas fa-pen-alt',
        'fas fa-pen-fancy',
        'fas fa-pen-nib',
        'fas fa-pen-square',
        'fas fa-pencil-alt',
        'fas fa-pencil-ruler',
        'fas fa-penny-arcade',
        'fas fa-people-carry',
        'fas fa-percent',
        'fas fa-percentage',
        'fas fa-periscope',
        'fas fa-person-booth',
        'fas fa-phabricator',
        'fas fa-phoenix-framework',
        'fas fa-phoenix-squadron',
        'fas fa-phone',
        'fas fa-phone-slash',
        'fas fa-phone-square',
        'fas fa-phone-volume',
        'fas fa-php',
        'fas fa-pied-piper',
        'fas fa-pied-piper-alt',
        'fas fa-pied-piper-hat',
        'fas fa-pied-piper-pp',
        'fas fa-piggy-bank',
        'fas fa-pills',
        'fas fa-pinterest',
        'fas fa-pinterest-p',
        'fas fa-pinterest-square',
        'fas fa-place-of-worship',
        'fas fa-plane',
        'fas fa-plane-arrival',
        'fas fa-plane-departure',
        'fas fa-play',
        'fas fa-play-circle',
        'fas fa-playstation',
        'fas fa-plug',
        'fas fa-plus',
        'fas fa-plus-circle',
        'fas fa-plus-square',
        'fas fa-podcast',
        'fas fa-poll',
        'fas fa-poll-h',
        'fas fa-poo',
        'fas fa-poo-storm',
        'fas fa-poop',
        'fas fa-portrait',
        'fas fa-pound-sign',
        'fas fa-power-off',
        'fas fa-pray',
        'fas fa-praying-hands',
        'fas fa-prescription',
        'fas fa-prescription-bottle',
        'fas fa-prescription-bottle-alt',
        'fas fa-print',
        'fas fa-procedures',
        'fas fa-product-hunt',
        'fas fa-project-diagram',
        'fas fa-pushed',
        'fas fa-puzzle-piece',
        'fas fa-python',
        'fas fa-qq',
        'fas fa-qrcode',
        'fas fa-question',
        'fas fa-question-circle',
        'fas fa-quidditch',
        'fas fa-quinscape',
        'fas fa-quora',
        'fas fa-quote-left',
        'fas fa-quote-right',
        'fas fa-quran',
        'fas fa-r-project',
        'fas fa-rainbow',
        'fas fa-random',
        'fas fa-ravelry',
        'fas fa-react',
        'fas fa-reacteurope',
        'fas fa-readme',
        'fas fa-rebel',
        'fas fa-receipt',
        'fas fa-recycle',
        'fas fa-red-river',
        'fas fa-reddit',
        'fas fa-reddit-alien',
        'fas fa-reddit-square',
        'fas fa-redo',
        'fas fa-redo-alt',
        'fas fa-registered',
        'fas fa-renren',
        'fas fa-reply',
        'fas fa-reply-all',
        'fas fa-replyd',
        'fas fa-republican',
        'fas fa-researchgate',
        'fas fa-resolving',
        'fas fa-retweet',
        'fas fa-rev',
        'fas fa-ribbon',
        'fas fa-ring',
        'fas fa-road',
        'fas fa-robot',
        'fas fa-rocket',
        'fas fa-rocketchat',
        'fas fa-rockrms',
        'fas fa-route',
        'fas fa-rss',
        'fas fa-rss-square',
        'fas fa-ruble-sign',
        'fas fa-ruler',
        'fas fa-ruler-combined',
        'fas fa-ruler-horizontal',
        'fas fa-ruler-vertical',
        'fas fa-running',
        'fas fa-rupee-sign',
        'fas fa-sad-cry',
        'fas fa-sad-tear',
        'fas fa-safari',
        'fas fa-sass',
        'fas fa-save',
        'fas fa-schlix',
        'fas fa-school',
        'fas fa-screwdriver',
        'fas fa-scribd',
        'fas fa-scroll',
        'fas fa-search',
        'fas fa-search-dollar',
        'fas fa-search-location',
        'fas fa-search-minus',
        'fas fa-search-plus',
        'fas fa-searchengin',
        'fas fa-seedling',
        'fas fa-sellcast',
        'fas fa-sellsy',
        'fas fa-server',
        'fas fa-servicestack',
        'fas fa-shapes',
        'fas fa-share',
        'fas fa-share-alt',
        'fas fa-share-alt-square',
        'fas fa-share-square',
        'fas fa-shekel-sign',
        'fas fa-shield-alt',
        'fas fa-ship',
        'fas fa-shipping-fast',
        'fas fa-shirtsinbulk',
        'fas fa-shoe-prints',
        'fas fa-shopping-bag',
        'fas fa-shopping-basket',
        'fas fa-shopping-cart',
        'fas fa-shopware',
        'fas fa-shower',
        'fas fa-shuttle-van',
        'fas fa-sign',
        'fas fa-sign-in-alt',
        'fas fa-sign-language',
        'fas fa-sign-out-alt',
        'fas fa-signal',
        'fas fa-signature',
        'fas fa-simplybuilt',
        'fas fa-sistrix',
        'fas fa-sitemap',
        'fas fa-sith',
        'fas fa-skull',
        'fas fa-skull-crossbones',
        'fas fa-skyatlas',
        'fas fa-skype',
        'fas fa-slack',
        'fas fa-slack-hash',
        'fas fa-slash',
        'fas fa-sliders-h',
        'fas fa-slideshare',
        'fas fa-smile',
        'fas fa-smile-beam',
        'fas fa-smile-wink',
        'fas fa-smog',
        'fas fa-smoking',
        'fas fa-smoking-ban',
        'fas fa-snapchat',
        'fas fa-snapchat-ghost',
        'fas fa-snapchat-square',
        'fas fa-snowflake',
        'fas fa-socks',
        'fas fa-solar-panel',
        'fas fa-sort',
        'fas fa-sort-alpha-down',
        'fas fa-sort-alpha-up',
        'fas fa-sort-amount-down',
        'fas fa-sort-amount-up',
        'fas fa-sort-down',
        'fas fa-sort-numeric-down',
        'fas fa-sort-numeric-up',
        'fas fa-sort-up',
        'fas fa-soundcloud',
        'fas fa-spa',
        'fas fa-space-shuttle',
        'fas fa-speakap',
        'fas fa-spider',
        'fas fa-spinner',
        'fas fa-splotch',
        'fas fa-spotify',
        'fas fa-spray-can',
        'fas fa-square',
        'fas fa-square-full',
        'fas fa-square-root-alt',
        'fas fa-squarespace',
        'fas fa-stack-exchange',
        'fas fa-stack-overflow',
        'fas fa-stamp',
        'fas fa-star',
        'fas fa-star-and-crescent',
        'fas fa-star-half',
        'fas fa-star-half-alt',
        'fas fa-star-of-david',
        'fas fa-star-of-life',
        'fas fa-staylinked',
        'fas fa-steam',
        'fas fa-steam-square',
        'fas fa-steam-symbol',
        'fas fa-step-backward',
        'fas fa-step-forward',
        'fas fa-stethoscope',
        'fas fa-sticker-mule',
        'fas fa-sticky-note',
        'fas fa-stop',
        'fas fa-stop-circle',
        'fas fa-stopwatch',
        'fas fa-store',
        'fas fa-store-alt',
        'fas fa-strava',
        'fas fa-stream',
        'fas fa-street-view',
        'fas fa-strikethrough',
        'fas fa-stripe',
        'fas fa-stripe-s',
        'fas fa-stroopwafel',
        'fas fa-studiovinari',
        'fas fa-stumbleupon',
        'fas fa-stumbleupon-circle',
        'fas fa-subscript',
        'fas fa-subway',
        'fas fa-suitcase',
        'fas fa-suitcase-rolling',
        'fas fa-sun',
        'fas fa-superpowers',
        'fas fa-superscript',
        'fas fa-supple',
        'fas fa-surprise',
        'fas fa-swatchbook',
        'fas fa-swimmer',
        'fas fa-swimming-pool',
        'fas fa-synagogue',
        'fas fa-sync',
        'fas fa-sync-alt',
        'fas fa-syringe',
        'fas fa-table',
        'fas fa-table-tennis',
        'fas fa-tablet',
        'fas fa-tablet-alt',
        'fas fa-tablets',
        'fas fa-tachometer-alt',
        'fas fa-tag',
        'fas fa-tags',
        'fas fa-tape',
        'fas fa-tasks',
        'fas fa-taxi',
        'fas fa-teamspeak',
        'fas fa-teeth',
        'fas fa-teeth-open',
        'fas fa-telegram',
        'fas fa-telegram-plane',
        'fas fa-temperature-high',
        'fas fa-temperature-low',
        'fas fa-tencent-weibo',
        'fas fa-terminal',
        'fas fa-text-height',
        'fas fa-text-width',
        'fas fa-th',
        'fas fa-th-large',
        'fas fa-th-list',
        'fas fa-the-red-yeti',
        'fas fa-theater-masks',
        'fas fa-themeco',
        'fas fa-themeisle',
        'fas fa-thermometer',
        'fas fa-thermometer-empty',
        'fas fa-thermometer-full',
        'fas fa-thermometer-half',
        'fas fa-thermometer-quarter',
        'fas fa-thermometer-three-quarters',
        'fas fa-think-peaks',
        'fas fa-thumbs-down',
        'fas fa-thumbs-up',
        'fas fa-thumbtack',
        'fas fa-ticket-alt',
        'fas fa-times',
        'fas fa-times-circle',
        'fas fa-tint',
        'fas fa-tint-slash',
        'fas fa-tired',
        'fas fa-toggle-off',
        'fas fa-toggle-on',
        'fas fa-toilet-paper',
        'fas fa-toolbox',
        'fas fa-tooth',
        'fas fa-torah',
        'fas fa-torii-gate',
        'fas fa-tractor',
        'fas fa-trade-federation',
        'fas fa-trademark',
        'fas fa-traffic-light',
        'fas fa-train',
        'fas fa-transgender',
        'fas fa-transgender-alt',
        'fas fa-trash',
        'fas fa-trash-alt',
        'fas fa-tree',
        'fas fa-trello',
        'fas fa-tripadvisor',
        'fas fa-trophy',
        'fas fa-truck',
        'fas fa-truck-loading',
        'fas fa-truck-monster',
        'fas fa-truck-moving',
        'fas fa-truck-pickup',
        'fas fa-tshirt',
        'fas fa-tty',
        'fas fa-tumblr',
        'fas fa-tumblr-square',
        'fas fa-tv',
        'fas fa-twitch',
        'fas fa-twitter',
        'fas fa-twitter-square',
        'fas fa-typo3',
        'fas fa-uber',
        'fas fa-uikit',
        'fas fa-umbrella',
        'fas fa-umbrella-beach',
        'fas fa-underline',
        'fas fa-undo',
        'fas fa-undo-alt',
        'fas fa-uniregistry',
        'fas fa-universal-access',
        'fas fa-university',
        'fas fa-unlink',
        'fas fa-unlock',
        'fas fa-unlock-alt',
        'fas fa-untappd',
        'fas fa-upload',
        'fas fa-usb',
        'fas fa-user',
        'fas fa-user-alt',
        'fas fa-user-alt-slash',
        'fas fa-user-astronaut',
        'fas fa-user-check',
        'fas fa-user-circle',
        'fas fa-user-clock',
        'fas fa-user-cog',
        'fas fa-user-edit',
        'fas fa-user-friends',
        'fas fa-user-graduate',
        'fas fa-user-injured',
        'fas fa-user-lock',
        'fas fa-user-md',
        'fas fa-user-minus',
        'fas fa-user-ninja',
        'fas fa-user-plus',
        'fas fa-user-secret',
        'fas fa-user-shield',
        'fas fa-user-slash',
        'fas fa-user-tag',
        'fas fa-user-tie',
        'fas fa-user-times',
        'fas fa-users',
        'fas fa-users-cog',
        'fas fa-ussunnah',
        'fas fa-utensil-spoon',
        'fas fa-utensils',
        'fas fa-vaadin',
        'fas fa-vector-square',
        'fas fa-venus',
        'fas fa-venus-double',
        'fas fa-venus-mars',
        'fas fa-viacoin',
        'fas fa-viadeo',
        'fas fa-viadeo-square',
        'fas fa-vial',
        'fas fa-vials',
        'fas fa-viber',
        'fas fa-video',
        'fas fa-video-slash',
        'fas fa-vihara',
        'fas fa-vimeo',
        'fas fa-vimeo-square',
        'fas fa-vimeo-v',
        'fas fa-vine',
        'fas fa-vk',
        'fas fa-vnv',
        'fas fa-volleyball-ball',
        'fas fa-volume-down',
        'fas fa-volume-mute',
        'fas fa-volume-off',
        'fas fa-volume-up',
        'fas fa-vote-yea',
        'fas fa-vr-cardboard',
        'fas fa-vuejs',
        'fas fa-walking',
        'fas fa-wallet',
        'fas fa-warehouse',
        'fas fa-water',
        'fas fa-weebly',
        'fas fa-weibo',
        'fas fa-weight',
        'fas fa-weight-hanging',
        'fas fa-weixin',
        'fas fa-whatsapp',
        'fas fa-whatsapp-square',
        'fas fa-wheelchair',
        'fas fa-whmcs',
        'fas fa-wifi',
        'fas fa-wikipedia-w',
        'fas fa-wind',
        'fas fa-window-close',
        'fas fa-window-maximize',
        'fas fa-window-minimize',
        'fas fa-window-restore',
        'fas fa-windows',
        'fas fa-wine-bottle',
        'fas fa-wine-glass',
        'fas fa-wine-glass-alt',
        'fas fa-wix',
        'fas fa-wizards-of-the-coast',
        'fas fa-wolf-pack-battalion',
        'fas fa-won-sign',
        'fas fa-wordpress',
        'fas fa-wordpress-simple',
        'fas fa-wpbeginner',
        'fas fa-wpexplorer',
        'fas fa-wpforms',
        'fas fa-wpressr',
        'fas fa-wrench',
        'fas fa-x-ray',
        'fas fa-xbox',
        'fas fa-xing',
        'fas fa-xing-square',
        'fas fa-y-combinator',
        'fas fa-yahoo',
        'fas fa-yandex',
        'fas fa-yandex-international',
        'fas fa-yelp',
        'fas fa-yen-sign',
        'fas fa-yin-yang',
        'fas fa-yoast',
        'fas fa-youtube',
        'fas fa-youtube-square',
        'fas fa-zhihu'
    ]
});
app.run(['$http', '$rootScope', 'ngAppSettings', '$location', 'BaseODataService', 'CommonService', 'AuthService', 'TranslatorService',
    function ($http, $rootScope, ngAppSettings, $location, baseODataService, commonService, authService, translatorService,
    ) {
        $rootScope.currentContext = $rootScope;
        $rootScope.isBusy = false;
        $rootScope.translator = translatorService;
        $rootScope.errors = [];
        $rootScope.breadCrumbs = [];
        $rootScope.message = {
            title: '',
            content: '',
            errors: [],
            okFuncName: null,
            okArgs: [],
            cancelFuncName: null,
            cancelArgs: [],
            lblOK: 'OK',
            lblCancel: 'Cancel',
            context: $rootScope
        };

        $rootScope.isBusy = false;
        $rootScope.translator = translatorService;
        $rootScope.message = {
            title: 'test',
            content: '',
            errors: [],
            okFuncName: null,
            okArgs: [],
            cancelFuncName: null,
            cancelArgs: [],
            lblOK: 'OK',
            lblCancel: 'Cancel',
            context: $rootScope
        };
        $rootScope.range = function (max) {
            var input = [];
            for (var i = 1; i <= max; i += 1) input.push(i);
            return input;
        };

        $rootScope.generateKeyword = function (src, character) {
            if (src) {
                src = $rootScope.parseUnsignString(src);
                return src.replace(/[^a-zA-Z0-9]+/g, character)
                    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
                    .replace(/([a-z])([A-Z])/g, '$1-$2')
                    .replace(/([0-9])([^0-9])/g, '$1-$2')
                    .replace(/([^0-9])([0-9])/g, '$1-$2')
                    .replace(/-+/g, character)
                    .toLowerCase();
            }
        };

        $rootScope.generatePhone = function (src) {
            return src.replace(/^([0-9]{3})([0-9]{3})([0-9]{4})$/, '($1) $2-$3');
        }
        $rootScope.parseUnsignString = function(str) {
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
            str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
            str = str.replace(/đ/g, "d");
            str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
            str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
            str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
            str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
            str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
            str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
            str = str.replace(/Đ/g, "D");
            return str;
        }
        $rootScope.logOut = function () {
            authService.logOut();            
        };

        $rootScope.updateSettings = function () {
            commonService.removeSettings();
            commonService.fillSettings($rootScope.globalSettings.lang).then(function (response) {
                $rootScope.globalSettings = response;

            });
            $rootScope.isBusy = false;
        };
        $rootScope.executeFunctionByName = async function (functionName, args, context) {
            if (functionName !== null) {
                var namespaces = functionName.split(".");
                var func = namespaces.pop();
                for (var i = 0; i < namespaces.length; i++) {
                    context = context[namespaces[i]];
                }
                functionName = null;
                return context[func].apply(this, args);
            }
        };

        $rootScope.showConfirm = function (context, okFuncName, okArgs, cancelFuncName, title, msg
            , cancelArgs, lblOK, lblCancel) {
            $rootScope.confirmMessage = {
                title: title,
                content: msg,
                context: context,
                okFuncName: okFuncName,
                okArgs: okArgs,
                cancelFuncName: cancelFuncName,
                cancelArgs: cancelArgs,
                lblOK: lblOK ? lblOK : 'OK',
                lblCancel: lblCancel ? lblCancel : 'Cancel'
            };
            $('#dlg-confirm-msg').modal('show');
        };

        $rootScope.preview = function (type, data, title, size, objClass) {
            $rootScope.previewObject = {
                title: title || 'Preview',
                size: size || 'modal-md',
                objClass: objClass,
                type: type,
                data: data
            };
            $('#dlg-preview-popup').modal('show');
        };

        $rootScope.initEditors = function () {
            setTimeout(function () {

                $.each($('.code-editor'), function (i, e) {
                    var container = $(this);
                    var editor = ace.edit(e);
                    if (container.hasClass('json')) {
                        editor.session.setMode("ace/mode/json");
                    }
                    else {
                        editor.session.setMode("ace/mode/razor");
                    }
                    editor.setTheme("ace/theme/chrome");
                    //editor.setReadOnly(true);
                    editor.$blockScrolling = Infinity;
                    editor.session.setUseWrapMode(true);
                    editor.setOptions({
                        maxLines: Infinity
                    });
                    editor.getSession().on('change', function (e) {
                        // e.type, etc                        
                        $(container).parent().find('.code-content').val(editor.getValue());
                    });
                });
            }, 200);
        };

        $rootScope.showErrors = function (errors) {
            if (errors.length) {

                $.each(errors, function (i, e) {
                    $rootScope.showMessage(e, 'danger');
                });
            }
            else {
                $rootScope.showMessage('Server Errors', 'danger');
            }
        };
        $rootScope.shortString = function (msg, max) {
            var data = decodeURIComponent(msg);
            if (data) {
                if (max < data.length) {
                    return data.replace(/[+]/g, ' ').substr(0, max) + ' ...';
                }
                else {
                    return data.replace(/[+]/g, ' ');
                }
            }
        };
        $rootScope.showMessage = function (content, type) {
            var from = 'bottom';
            var align = 'right';
            $.notify({
                icon: "now-ui-icons ui-1_bell-53",
                message: $rootScope.translate(content)

            }, {
                    type: type,
                    timer: 2000,
                    placement: {
                        from: from,
                        align: align
                    }
                });
        };
        $rootScope.encrypt = function (message) {
            var keySize = 256;
            var ivSize = 128;
            var iterations = 100;
            var salt = CryptoJS.lib.WordArray.random(128 / 8);
            var pass = 'secret-key';
            var key = CryptoJS.PBKDF2(pass, salt, {
                keySize: keySize / 32,
                iterations: iterations
            });

            var iv = CryptoJS.lib.WordArray.random(ivSize / 8);

            var options = {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7,
                iv: iv,
            };
            var encrypted = CryptoJS.AES.encrypt(message, key, options);
            return {
                key: key.toString(CryptoJS.enc.Base64),
                iv: iv.toString(CryptoJS.enc.Base64),
                data: encrypted.ciphertext.toString(CryptoJS.enc.Base64)
            };
        }
        $rootScope.decrypt = function (encryptedData) {
            var ivSize = 128;
            var cipherParams = CryptoJS.lib.CipherParams.create({
                ciphertext: CryptoJS.enc.Base64.parse(encryptedData.data)
            });
            var key = CryptoJS.enc.Base64.parse(encryptedData.key);
            var iv = CryptoJS.lib.WordArray.random(ivSize / 8);
            var options = {
                mode: CryptoJS.mode.ECB,
                padding: CryptoJS.pad.Pkcs7,
                iv: iv,
            };

            var decrypted = CryptoJS.AES.decrypt(
                cipherParams,
                key,
                options);
            return decrypted.toString(CryptoJS.enc.Utf8);
        }

        $rootScope.translate = function (keyword, isWrap, defaultText) {
            if ($rootScope.globalSettings && ($rootScope.translator)) {
                return $rootScope.translator.get(keyword, isWrap, defaultText) || keyword;
            }
            else {
                return keyword || defaultText;
            }
        };

        $rootScope.getConfiguration = function (keyword, isWrap, defaultText) {
            if ($rootScope.globalSettings && ($rootScope.globalSettingsService || $rootScope.isBusy)) {
                return $rootScope.globalSettingsService.get(keyword, isWrap, defaultText);
            }
            else {
                return keyword || defaultText;
            }
        };

        $rootScope.waitForInit = async function (functionName, args, scope) {
            if (!$rootScope.isInit) {
                () => {
                    setTimeout(() => {
                        $rootScope.waitForInit(functionName, args, scope);
                    }, 200);
                }
            }
            else {
                $rootScope.executeFunctionByName(functionName, args, scope);
            }
        }

        $rootScope.$watch('isBusy', function (newValue, oldValue) {
            if (newValue) {
                $rootScope.message.content = '';
                $rootScope.errors = [];
            }
        });
        $rootScope.generateUUID = function() { // Public Domain/MIT
            var d = new Date().getTime();
            if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
                d += performance.now(); //use high-precision timer if available
            }
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
        };
        $rootScope.filterArray = function (array, key, value) {
            var result = [];
            for (var i = 0; i < array.length; i++) {
                if (array[i][key] === value) {
                    result.push(array[i]);
                }
            }
            return result;
        };
        $rootScope.findObjectByKey = function (array, key, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i][key] == value) {
                    return array[i];
                }
            }
            return null;
        }
        $rootScope.removeObjectByKey = function (array, key, value) {
            for (var i = 0; i < array.length; i++) {
                if (array[i][key] == value) {
                    array.splice(i,1);
                    break;
                }
            }
        }
        
        $rootScope.changeLang = async function (lang) {
            var url = await translatorService.translateUrl(lang);
            translatorService.translateUrl(lang);
            window.top.location = url;
        };
        // upload on file select or drop
        $rootScope.upload = function (file, url) {
            Upload.upload({
                url: 'upload/url',
                data: { file: file, 'username': $scope.username }
            }).then(function (resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
        $rootScope.goToSiteUrl = function(url){
            window.top.location = url;
        };
        $rootScope.goToPath = function(url){
            $rootScope.isBusy = true;
            $location.url(url);
        };
        $rootScope.encryptAttributeSet = function(attributes, data){
            angular.forEach(attributes, function(attr){
                if(attr.isEncrypt){
                    angular.forEach(data, function(item){
                        var fieldData = $rootScope.findObjectByKey(item.data, 'attributeName', attr.name);
                        if(fieldData){
                            var encryptedData = $rootScope.encrypt(fieldData.stringValue);
                            fieldData.encryptValue = encryptedData.data;
                            fieldData.encryptKey = encryptedData.key;
                            fieldData.stringValue = '';
                        }
                    });
                }
            });
        };
        $rootScope.decryptAttributeSet = function(attributes, data){
            angular.forEach(attributes, function(attr){
                if(attr.isEncrypt){
                    angular.forEach(data, function(item){
                        var fieldData = $rootScope.findObjectByKey(item.data, 'attributeName', attr.name);
                        if(fieldData){
                            var encryptedData = {
                                key: fieldData.encryptKey,
                                data: fieldData.encryptValue
                            };
                            fieldData.stringValue =  $rootScope.decrypt(encryptedData);;
                        }
                    });
                }
            });
        };

        $rootScope.getODataService = function(modelName, isGlobal)
        {
            var serviceFactory = angular.copy(baseODataService);
            serviceFactory.init(modelName, isGlobal);
            return serviceFactory;            
        };

    }]);
if ($.trumbowyg) {
    $.trumbowyg.svgPath = '/assets/icons.svg';
}