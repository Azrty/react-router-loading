import { Context } from 'react';
import { ElementType } from 'react';
import { FC } from 'react';
import { ReactNode } from 'react';
import { RouteProps as RouteProps_2 } from 'react-router';

export declare const LoadingContext: Context<LoadingContextActions>;

declare interface LoadingContextActions {
    start: () => void;
    done: () => void;
    restart: () => void;
}

export declare const LoadingGetterContext: Context<boolean>;

export declare const Route: FC<RouteProps>;

declare type RouteProps = RouteProps_2 & {
    loading?: boolean;
};

export declare const Routes: FC<RoutesProps>;

declare interface RoutesProps {
    children: ReactNode;
    loadingScreen?: ElementType;
    maxLoadingTime?: number;
    isLoading?: boolean;
}

export declare interface TopBar {
    show: () => void;
    hide: () => void;
    config: (conf: TopBarConfig) => void;
}

export declare const topbar: TopBar;

export declare interface TopBarConfig {
    autoRun?: boolean;
    barThickness?: number;
    barColors?: Record<number, string>;
    shadowBlur?: number;
    shadowColor?: string;
    className?: string;
}

export declare const useLoadingContext: () => LoadingContextActions;

export { }
