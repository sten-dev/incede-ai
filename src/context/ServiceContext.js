import React, { createContext, useState, useEffect } from 'react';
import { useLocation } from '@reach/router'; // Gatsby uses @reach/router for location

export const ServiceContext = createContext();

export const ServiceContextProvider = ({ children }) => {
  const location = useLocation(); // Hook to get current location
  const [selectedServiceIndex, setSelectedServiceIndex] = useState('0');
  const [selectedSubServiceHash, setSelectedSubServiceHash] = useState('');

  // Helper to map pathname to service index
  const getServiceIndexFromPath = (pathname) => {
    switch (pathname) {
      case "/services/enterprise-ai-agents":
      case "/services/enterprise-ai-agents/":
        return "0";
      case "/services/gen-ai-implementation":
      case "/services/gen-ai-implementation/":
        return "1";
      case "/services/ai-powered-business-process-automation":
      case "/services/ai-powered-business-process-automation/":
        return "2";
      case "/services/planning-budgeting-and-analytics":
      case "/services/planning-budgeting-and-analytics/":
        return "3";
      default:
        return "0"; // Default to the first service
    }
  };

  // Effect to update context state on URL changes
  useEffect(() => {
    const newServiceIndex = getServiceIndexFromPath(location.pathname);
    const newSubServiceHash = location.hash ? location.hash.substring(1) : ''; // Remove '#'

    if (newServiceIndex !== selectedServiceIndex) {
      setSelectedServiceIndex(newServiceIndex);
    }
    if (newSubServiceHash !== selectedSubServiceHash) {
      setSelectedSubServiceHash(newSubServiceHash);
    }
  }, [location.pathname, location.hash, selectedServiceIndex, selectedSubServiceHash]);

  // Function to manually update selection (e.g., from onSelect in ServicesHeader)
  const updateServiceSelection = (path, hash) => {
    const newServiceIndex = getServiceIndexFromPath(path);
    const newSubServiceHash = hash ? hash : '';

    setSelectedServiceIndex(newServiceIndex);
    setSelectedSubServiceHash(newSubServiceHash);
  };

  return (
    <ServiceContext.Provider value={{ selectedServiceIndex, selectedSubServiceHash, updateServiceSelection }}>
      {children}
    </ServiceContext.Provider>
  );
};
