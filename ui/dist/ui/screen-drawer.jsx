'use client';
import { Cross1Icon } from '@radix-ui/react-icons';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Drawer } from 'vaul';
import { cn } from '@/libs/cn';
var ScreenDrawerContext = createContext(undefined);
export var ScreenDrawerProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), opened = _b[0], setOpened = _b[1];
    var open = function () {
        setOpened(true);
        window.history.pushState({ opened: Date.now().toString() }, '');
    };
    var close = function () {
        window.history.back();
    };
    useEffect(function () {
        var handlePopState = function () {
            setOpened(false);
        };
        window.addEventListener('popstate', handlePopState);
        return function () {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);
    return (<ScreenDrawerContext.Provider value={{ opened: opened, open: open, close: close }}>
      {children}
    </ScreenDrawerContext.Provider>);
};
export var useScreenDrawer = function () {
    var context = useContext(ScreenDrawerContext);
    if (!context) {
        throw new Error('useScreenDrawer must be used within a ScreenDrawerProvider');
    }
    return context;
};
var ScreenDrawer = function (_a) {
    var className = _a.className, title = _a.title, children = _a.children;
    var _b = useScreenDrawer(), opened = _b.opened, close = _b.close;
    return (<Drawer.Root dismissible={false} open={opened} noBodyStyles direction="right">
      <Drawer.Portal>
        <Drawer.Content className={cn('fixed inset-x-0 bottom-0 z-50 mt-6 h-full bg-white px-4', className)}>
          <div className="flex justify-between py-4">
            <div />
            <h2 className="text-lg">{title}</h2>
            <button onClick={close}>
              <Cross1Icon width={20} height={20}/>
            </button>
          </div>
          <div className="max-w-[44rem] w-full mx-auto">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>);
};
export default ScreenDrawer;
