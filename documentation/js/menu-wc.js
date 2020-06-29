'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">mayestro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountMayestroModule.html" data-type="entity-link">AccountMayestroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountMayestroModule-c52cffa59b3f9fc662fe2e24f4d5e739"' : 'data-target="#xs-components-links-module-AccountMayestroModule-c52cffa59b3f9fc662fe2e24f4d5e739"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountMayestroModule-c52cffa59b3f9fc662fe2e24f4d5e739"' :
                                            'id="xs-components-links-module-AccountMayestroModule-c52cffa59b3f9fc662fe2e24f4d5e739"' }>
                                            <li class="link">
                                                <a href="components/AccountMayestroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountMayestroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ForgetPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ForgetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyPolicyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PrivacyPolicyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SigninComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SigninComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AccountMayestroModule-c52cffa59b3f9fc662fe2e24f4d5e739"' : 'data-target="#xs-injectables-links-module-AccountMayestroModule-c52cffa59b3f9fc662fe2e24f4d5e739"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AccountMayestroModule-c52cffa59b3f9fc662fe2e24f4d5e739"' :
                                        'id="xs-injectables-links-module-AccountMayestroModule-c52cffa59b3f9fc662fe2e24f4d5e739"' }>
                                        <li class="link">
                                            <a href="injectables/AccountMayestroService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AccountMayestroService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountMayestroRoutingModule.html" data-type="entity-link">AccountMayestroRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-34580e6e9d5ce2f0e2607d4b59a1a695"' : 'data-target="#xs-components-links-module-AppModule-34580e6e9d5ce2f0e2607d4b59a1a695"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-34580e6e9d5ce2f0e2607d4b59a1a695"' :
                                            'id="xs-components-links-module-AppModule-34580e6e9d5ce2f0e2607d4b59a1a695"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArtistManagementModule.html" data-type="entity-link">ArtistManagementModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArtistManagementModule-f3dbb644cf8a111a8ad183c6c47ec622"' : 'data-target="#xs-components-links-module-ArtistManagementModule-f3dbb644cf8a111a8ad183c6c47ec622"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArtistManagementModule-f3dbb644cf8a111a8ad183c6c47ec622"' :
                                            'id="xs-components-links-module-ArtistManagementModule-f3dbb644cf8a111a8ad183c6c47ec622"' }>
                                            <li class="link">
                                                <a href="components/ArtistManagementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistManagementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardsContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardsContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateAlbumComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateAlbumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateSongComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CreateSongComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArtistManagementRoutingModule.html" data-type="entity-link">ArtistManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ArtistModule.html" data-type="entity-link">ArtistModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ArtistModule-ede69ea09ab8e8e53afeb54b1a76dde6"' : 'data-target="#xs-components-links-module-ArtistModule-ede69ea09ab8e8e53afeb54b1a76dde6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ArtistModule-ede69ea09ab8e8e53afeb54b1a76dde6"' :
                                            'id="xs-components-links-module-ArtistModule-ede69ea09ab8e8e53afeb54b1a76dde6"' }>
                                            <li class="link">
                                                <a href="components/AboutArtistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutArtistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistOverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistSongComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistSongComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RelatedArtistsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RelatedArtistsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArtistRoutingModule.html" data-type="entity-link">ArtistRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConnectModule.html" data-type="entity-link">ConnectModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConnectModule-050f1787717521aef4dcaff0f6fa8c65"' : 'data-target="#xs-components-links-module-ConnectModule-050f1787717521aef4dcaff0f6fa8c65"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConnectModule-050f1787717521aef4dcaff0f6fa8c65"' :
                                            'id="xs-components-links-module-ConnectModule-050f1787717521aef4dcaff0f6fa8c65"' }>
                                            <li class="link">
                                                <a href="components/ConnectComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConnectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConnectingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConnectingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConnectRoutingModule.html" data-type="entity-link">ConnectRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MayestroModule.html" data-type="entity-link">MayestroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MayestroModule-d1ed1b95d15089e0c0680c073f20c416"' : 'data-target="#xs-components-links-module-MayestroModule-d1ed1b95d15089e0c0680c073f20c416"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MayestroModule-d1ed1b95d15089e0c0680c073f20c416"' :
                                            'id="xs-components-links-module-MayestroModule-d1ed1b95d15089e0c0680c073f20c416"' }>
                                            <li class="link">
                                                <a href="components/AlbumsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlbumsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ArtistsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ArtistsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DownloadComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DownloadComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LikedsongsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LikedsongsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MayestroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MayestroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MiniCardViewerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MiniCardViewerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlayerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayingQueueComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlayingQueueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaylistComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlaylistComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaylistsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlaylistsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecentSearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RecentSearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeeAllComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SeeAllComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SongsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SongsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopResultComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrackComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-MayestroModule-d1ed1b95d15089e0c0680c073f20c416"' : 'data-target="#xs-injectables-links-module-MayestroModule-d1ed1b95d15089e0c0680c073f20c416"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MayestroModule-d1ed1b95d15089e0c0680c073f20c416"' :
                                        'id="xs-injectables-links-module-MayestroModule-d1ed1b95d15089e0c0680c073f20c416"' }>
                                        <li class="link">
                                            <a href="injectables/MayestroService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MayestroService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MayestroRoutingModule.html" data-type="entity-link">MayestroRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OpenMayestroModule.html" data-type="entity-link">OpenMayestroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OpenMayestroModule-12a963df32904120758870a46b6ee097"' : 'data-target="#xs-components-links-module-OpenMayestroModule-12a963df32904120758870a46b6ee097"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OpenMayestroModule-12a963df32904120758870a46b6ee097"' :
                                            'id="xs-components-links-module-OpenMayestroModule-12a963df32904120758870a46b6ee097"' }>
                                            <li class="link">
                                                <a href="components/AccountHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangeEmailHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangeEmailHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePlanComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangePlanComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditAccountHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditAccountHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetPremiumComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GetPremiumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetPremiumHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GetPremiumHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OpenMayestroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OpenMayestroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PremiumComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PremiumComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetPasswordHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SetDevicePasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SetDevicePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarHelpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsingMayestroComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsingMayestroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OpenMayestroModule-12a963df32904120758870a46b6ee097"' : 'data-target="#xs-injectables-links-module-OpenMayestroModule-12a963df32904120758870a46b6ee097"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OpenMayestroModule-12a963df32904120758870a46b6ee097"' :
                                        'id="xs-injectables-links-module-OpenMayestroModule-12a963df32904120758870a46b6ee097"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpenMayestroRoutingModule.html" data-type="entity-link">OpenMayestroRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-2b626271e32b1c90022d877334e8952b"' : 'data-target="#xs-components-links-module-SharedModule-2b626271e32b1c90022d877334e8952b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-2b626271e32b1c90022d877334e8952b"' :
                                            'id="xs-components-links-module-SharedModule-2b626271e32b1c90022d877334e8952b"' }>
                                            <li class="link">
                                                <a href="components/HomeArtistCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeArtistCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CardComponent-1.html" data-type="entity-link">CardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChangePasswordComponent-1.html" data-type="entity-link">ChangePasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent-1.html" data-type="entity-link">FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-1.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-2.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-3.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent-4.html" data-type="entity-link">HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent-1.html" data-type="entity-link">HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent-2.html" data-type="entity-link">HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SongComponent.html" data-type="entity-link">SongComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SongComponent-1.html" data-type="entity-link">SongComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ICard.html" data-type="entity-link">ICard</a>
                            </li>
                            <li class="link">
                                <a href="classes/ICategory.html" data-type="entity-link">ICategory</a>
                            </li>
                            <li class="link">
                                <a href="classes/IPlaylist.html" data-type="entity-link">IPlaylist</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountMayestroService.html" data-type="entity-link">AccountMayestroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArtistManagementService.html" data-type="entity-link">ArtistManagementService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ArtistService.html" data-type="entity-link">ArtistService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AssetsService.html" data-type="entity-link">AssetsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LikeAndFollowService.html" data-type="entity-link">LikeAndFollowService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoadingService.html" data-type="entity-link">LoadingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MayestroService.html" data-type="entity-link">MayestroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MaystroService.html" data-type="entity-link">MaystroService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlayerService.html" data-type="entity-link">PlayerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchInputService.html" data-type="entity-link">SearchInputService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/MockServerService.html" data-type="entity-link">MockServerService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IACard.html" data-type="entity-link">IACard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IArtistCard.html" data-type="entity-link">IArtistCard</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IASong.html" data-type="entity-link">IASong</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});