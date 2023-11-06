/* eslint-disable react/jsx-key */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../public/icons/logo.svg';
import search from '../public/icons/search.svg';
import '../styles/globals.css';

function Header() {
    const [headerClass, setHeaderClass] = useState('');

      const handleScroll = () => {
          if (window.scrollY >= 250) {
              setHeaderClass('scrolled');
          } else {
              setHeaderClass('');
          }
      };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

    const path = usePathname();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navLinks = [
        {
            id: 1,
            name: 'about',
            path: '/about',
        },
        {
            id: 2,
            name: 'services',
            path: '/services',
        },
        {
            id: 3,
            name: 'contact',
            path: '/contact',
        },
    ];

    const homeLinks = [
        {
            id: 1,
            name: 'home',
            path: '/',
        },
        {
            id: 2,
            name: 'home 2',
            path: '/home',
        },
    ];

    const subLinks = [
        {
            id: 1,
            name: 'blog',
            path: '/blog',
        },
        {
            id: 2,
            name: 'faq',
            path: '/faq',
        },
        {
            id: 3,
            name: 'partner',
            path: '/partner',
        },
        {
            id: 4,
            name: 'quote',
            path: '/quote',
        },
        {
            id: 5,
            name: 'service-process',
            path: '/service-process',
        },
        {
            id: 6,
            name: 'team',
            path: '/team',
        },
        {
            id: 7,
            name: 'testimonials',
            path: '/testimonials',
        },
    ];
    return (
        <>
            <header
                id="header"
                className={`header header-1 ${headerClass}`}
            >
                <Navbar
                    expand="lg"
                    className=""
                >
                    <Container>
                        <Navbar.Brand>
                            <Link href="/">
                                <Image
                                    src={logo}
                                    alt="Landscape picture"
                                />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className="header-menu-wrapper ms-auto">
                                <Nav className="ms-auto">
                                    <NavDropdown
                                        title="Home"
                                        id="basic-nav-dropdown"
                                    >
                                        {homeLinks.map((homeLink) => (
                                            <NavDropdown.Item key={homeLink.id}>
                                                <Link
                                                    className={`${
                                                        homeLink.path === path
                                                            ? 'active'
                                                            : ''
                                                    } nav-link`}
                                                    href={homeLink.path}
                                                >
                                                    {homeLink.name}
                                                </Link>
                                            </NavDropdown.Item>
                                        ))}
                                    </NavDropdown>
                                    {navLinks.map((navLink) => (
                                        <Link
                                            className={`${
                                                navLink.path === path
                                                    ? 'active'
                                                    : ''
                                            } nav-link`}
                                            href={navLink.path}
                                            key={navLink.id}
                                        >
                                            {navLink.name}
                                        </Link>
                                    ))}
                                    <NavDropdown
                                        title="Pages"
                                        id="basic-nav-dropdown"
                                    >
                                        {subLinks.map((subLink) => (
                                            <NavDropdown.Item key={subLink.id}>
                                                <Link
                                                    className={`${
                                                        subLink.path === path
                                                            ? 'active'
                                                            : ''
                                                    } nav-link`}
                                                    href={subLink.path}
                                                >
                                                    {subLink.name}
                                                </Link>
                                            </NavDropdown.Item>
                                        ))}
                                    </NavDropdown>
                                </Nav>
                                <div className="m-hide">
                                    <div className="header-buttons d-none d-xl-flex">
                                        <button
                                            type="button"
                                            className="btn-search"
                                            onClick={handleShow}
                                        >
                                            <Image
                                                src={search}
                                                alt="search"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <Modal
                show={show}
                onHide={handleClose}
            >
                <div class="modal-search">
                        <input class="form-control search-input" type="text" placeholder="Search..." />
                        <button class="btn btn-orange">Search</button>
                    </div>
            </Modal>
        </>
    );
}

export default Header;
