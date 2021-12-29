import Link, { LinkProps } from 'next/link';
import { ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;

}

export function ActiveLink() { }
