// src/components/layout/Layout.tsx
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-primary text-background text-center py-4 text-sm">
        © {new Date().getFullYear()} Sistema de Gestión de Estudiantes Universitarios
      </footer>
    </div>
  );
}